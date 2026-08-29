import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const DOCS_DIR = path.join(ROOT, 'src', 'content', 'documents');
const OUT_FILE = path.join(ROOT, 'src', 'data', 'archive-quality.generated.json');
const files = fs.readdirSync(DOCS_DIR).filter(name => /\.(?:md|mdx)$/i.test(name)).sort((a,b)=>a.localeCompare(b));

function splitFrontmatter(raw){
  const m=raw.match(/^---\s*\r?\n([\s\S]*?)\r?\n---\s*\r?\n?/);
  return m?{frontmatter:m[1],body:raw.slice(m[0].length)}:{frontmatter:'',body:raw};
}
function scalar(fm,key){
  const m=fm.match(new RegExp(`^${key}:\\s*(.+?)\\s*$`,'m'));
  if(!m)return '';
  const v=m[1].trim();
  return ((v.startsWith('"')&&v.endsWith('"'))||(v.startsWith("'")&&v.endsWith("'")))?v.slice(1,-1):v;
}
function listBlock(fm,key){
  const lines=fm.split(/\r?\n/),start=lines.findIndex(l=>new RegExp(`^${key}:\\s*`).test(l));
  if(start<0)return[];
  const first=lines[start].replace(new RegExp(`^${key}:\\s*`),'').trim();
  if(first.startsWith('[')&&first.endsWith(']'))return first.slice(1,-1).split(',').map(v=>v.trim().replace(/^['"]|['"]$/g,'')).filter(Boolean);
  const values=[];
  for(let i=start+1;i<lines.length;i++){
    const line=lines[i];
    if(/^[A-Za-z][A-Za-z0-9_]*:\s*/.test(line))break;
    const item=line.match(/^\s*-\s*(?:target:\s*)?["']?([^"']+?)["']?\s*$/);
    if(item)values.push(item[1].trim());
    const target=line.match(/^\s+target:\s*["']?([^"']+?)["']?\s*$/);
    if(target)values.push(target[1].trim());
  }
  return values;
}
function normalizeLine(v){return v.replace(/\\\[/g,'[').replace(/\\\]/g,']').replace(/\\"/g,'"').replace(/\s+/g,' ').trim();}
function stripDecor(v){return normalizeLine(v).replace(/^[-|]+|[-|]+$/g,'').trim();}

function extractLabeled(body,labels){
  const lines=body.split(/\r?\n/);
  for(const label of labels){
    const bold=new RegExp(`^\\s*\\*\\*${label}\\*\\*\\s+(.*)$`,'i');
    const plain=new RegExp(`^\\s*${label}\\s*[:：]\\s*(.*)$`,'i');
    for(let i=0;i<lines.length;i++){
      let m=lines[i].match(bold)||lines[i].match(plain);
      if(!m)continue;
      let value=m[1]??'';
      // Pandoc-style table rows often wrap the value onto indented continuation lines.
      for(let j=i+1;j<lines.length;j++){
        const next=lines[j];
        if(!next.trim())break;
        if(/^\s*\*\*[A-ZÄÖÜ0-9 _/-]+\*\*/i.test(next))break;
        if(/^\s{2,}\S/.test(next)) value += ` ${next.trim()}`;
        else break;
      }
      value=stripDecor(value);
      if(value&&value.length<240)return value;
    }
  }
  return '';
}
function cleanBodyForWords(body){return body.replace(/```[\s\S]*?```/g,' ').replace(/!\[[^\]]*\]\([^)]*\)/g,' ').replace(/<[^>]+>/g,' ').replace(/https?:\/\/\S+/g,' ').replace(/[`*_>#|=~\\[\](){}]/g,' ').replace(/\bOTA-[A-Z]+-[A-Z0-9-]+\b/g,' ').replace(/\s+/g,' ').trim();}
function words(t){return t?t.split(/\s+/).filter(Boolean):[];}
function isGenericSummary(s,sig){s=s.trim();return !s||s===sig||/^(?:Wissenschaftliches|Technisches|Historisches|Narratives|Biografisches|Foundational) Dokument\b/i.test(s)||/^OTA-[A-Z]+-/i.test(s)||words(s).length<9;}
function isGenericTitle(t,sig){t=t.trim();return !t||t===sig||/^OTA-[A-Z]+-[A-Z0-9-]+$/i.test(t);}
function substantiveParagraph(body){
  const c=body.split(/\r?\n\s*\r?\n/).map(normalizeLine).filter(p=>p.length>=90).filter(p=>!/^[-| ]+$/.test(p)).filter(p=>!/^THE OVERTIME ARCHIVE$/i.test(p)).filter(p=>!/^OTA-[A-Z]+-/i.test(p)).filter(p=>!/^\*\*(?:DOC-ID|KLASSIFIZIERUNG|SUBJEKT|AUTOR|DATUM|STATUS|EPISTEMOLOGIE|QUERVERWEISE)\*\*/i.test(p));
  const first=c[0]??'';
  return first.length>360?`${first.slice(0,357).trim()}…`:first;
}
function cleanCandidate(v){return normalizeLine(v||'').replace(/^#+\s*/,'').replace(/^[-–—:| ]+|[-–—:| ]+$/g,'').trim();}
function validTitleCandidate(v,sig){
  v=cleanCandidate(v);
  if(!v||v===sig||v.length<4||v.length>180||/^OTA-[A-Z]+-/i.test(v))return null;
  if(/^\*\*/.test(v)||/^(?:Jahr|Datum|Dauer|Grund|Status|Typ)$/i.test(v))return null;
  if(/\*\*.*\*\*/.test(v))return null;
  return v;
}
function firstHeadingCandidate(body,sig){
  for(const m of body.matchAll(/^#{1,3}\s+(.+)$/gm)){
    const v=validTitleCandidate(m[1],sig);
    if(v&&!/^(?:Inhalt|Einleitung|Zusammenfassung|Abstract|Curatorial Note|Anhang|Vorbemerkung)$/i.test(v))return v;
  }
  return null;
}
function summaryCandidate(v){v=cleanCandidate(v);if(!v||v.length<90||v.length>360)return null;if(/^\*\*(?:DOC-ID|KLASSIFIZIERUNG|SUBJEKT|AUTOR|DATUM|STATUS|EPISTEMOLOGIE|QUERVERWEISE)/i.test(v))return null;return v;}

const documents=files.map(file=>{
  const raw=fs.readFileSync(path.join(DOCS_DIR,file),'utf8');
  const {frontmatter,body}=splitFrontmatter(raw);
  const signature=scalar(frontmatter,'signature')||file.replace(/\.(?:md|mdx)$/i,'');
  const title=scalar(frontmatter,'title'),summary=scalar(frontmatter,'summary'),series=scalar(frontmatter,'series'),year=scalar(frontmatter,'year'),language=scalar(frontmatter,'language'),related=listBlock(frontmatter,'relatedDocuments');
  const bodyWordCount=words(cleanBodyForWords(body)).length,headings=(body.match(/^#{1,4}\s+.+$/gm)??[]).length,images=(body.match(/!\[[^\]]*\]\([^)]*\)/g)??[]).length+(body.match(/<img\b/gi)??[]).length,tables=(body.match(/^\s*\|.*\|\s*$/gm)??[]).length>1?1:0;
  const allRefs=[...body.matchAll(/\bOTA-[A-Z]+-[A-Z0-9-]+\b/g)].map(m=>m[0]);
  const referencedTargets=[...new Set(allRefs.filter(ref=>ref!==signature))];
  const extractedTitle=extractLabeled(body,['SUBJEKT','TITEL','BETREFF','THEMA']),extractedAuthor=extractLabeled(body,['AUTOR','AUTORIN','VERFASSER','VERFASSERIN']),extractedClassification=extractLabeled(body,['KLASSIFIZIERUNG','DOKUMENTTYP','TYP']),excerpt=substantiveParagraph(body);
  const genericTitle=isGenericTitle(title,signature),genericSummary=isGenericSummary(summary,signature);
  const relationGap=referencedTargets.filter(r=>!related.includes(r));
  let substance='FRAGMENT';if(bodyWordCount>=1200||(bodyWordCount>=700&&headings>=4))substance='SUBSTANZIELL';else if(bodyWordCount>=350)substance='KURZ';
  const flags=[];if(genericTitle)flags.push('GENERIC_TITLE');if(genericSummary)flags.push('GENERIC_SUMMARY');if(relationGap.length)flags.push('RELATION_GAP');if(images===0)flags.push('NO_VISUAL');if(headings===0)flags.push('NO_HEADINGS');if(bodyWordCount<350)flags.push('LOW_SUBSTANCE');
  const priority=(genericTitle?4:0)+(genericSummary?3:0)+(relationGap.length?2:0)+(bodyWordCount<350?4:bodyWordCount<700?2:0)+(headings===0?1:0);

  const safeTitle=genericTitle?validTitleCandidate(extractedTitle,signature):null;
  const derivedTitle=genericTitle&&!safeTitle?firstHeadingCandidate(body,signature):null;
  let titleReview={tier:'OK',candidate:null,evidence:'canonical-title'};
  if(genericTitle&&safeTitle)titleReview={tier:'A',candidate:safeTitle,evidence:'explicit-labeled-field'};
  else if(genericTitle&&derivedTitle)titleReview={tier:'B',candidate:derivedTitle,evidence:'first-meaningful-heading'};
  else if(genericTitle)titleReview={tier:'C',candidate:null,evidence:'editorial-decision-required'};

  const safeSummary=genericSummary?summaryCandidate(excerpt):null;
  // An inline mention is evidence for a relation review, not sufficient evidence
  // to mutate canonical relatedDocuments automatically.
  const relationCandidates=relationGap.map(target=>({target,evidence:'inline-reference',safe:false}));
  const candidateCount=(safeTitle?1:0)+(derivedTitle?1:0)+(safeSummary?1:0)+relationCandidates.length;
  return {file,signature,series,year,language,canonical:{title,summary,relatedCount:related.length},extracted:{title:extractedTitle||null,author:extractedAuthor||null,classification:extractedClassification||null,excerpt:excerpt||null},titleReview,candidates:{title:safeTitle?{value:safeTitle,evidence:'explicit-labeled-field',safe:true}:null,derivedTitle:derivedTitle?{value:derivedTitle,evidence:'first-meaningful-heading',safe:false}:null,summary:safeSummary?{value:safeSummary,evidence:'first-substantive-paragraph',safe:false}:null,relations:relationCandidates,count:candidateCount},metrics:{words:bodyWordCount,headings,images,tables,inlineReferenceTargets:referencedTargets.length},quality:{substance,genericTitle,genericSummary,relationGap:relationGap.length>0,flags,priority}};
});

documents.sort((a,b)=>b.quality.priority-a.quality.priority||a.signature.localeCompare(b.signature));
const summary={
  documents:documents.length,
  substantial:documents.filter(d=>d.quality.substance==='SUBSTANZIELL').length,
  short:documents.filter(d=>d.quality.substance==='KURZ').length,
  fragments:documents.filter(d=>d.quality.substance==='FRAGMENT').length,
  genericTitles:documents.filter(d=>d.quality.genericTitle).length,
  genericSummaries:documents.filter(d=>d.quality.genericSummary).length,
  relationGaps:documents.filter(d=>d.quality.relationGap).length,
  withoutVisuals:documents.filter(d=>d.metrics.images===0).length,
  titleReviewA:documents.filter(d=>d.titleReview.tier==='A').length,
  titleReviewB:documents.filter(d=>d.titleReview.tier==='B').length,
  titleReviewC:documents.filter(d=>d.titleReview.tier==='C').length,
  titleReviewOK:documents.filter(d=>d.titleReview.tier==='OK').length,
  safeTitleCandidates:documents.filter(d=>d.candidates.title?.safe).length,
  summaryCandidates:documents.filter(d=>d.candidates.summary).length,
  relationCandidates:documents.reduce((n,d)=>n+d.candidates.relations.length,0),
  safeRelationCandidates:documents.reduce((n,d)=>n+d.candidates.relations.filter(r=>r.safe).length,0)
};
fs.mkdirSync(path.dirname(OUT_FILE),{recursive:true});
fs.writeFileSync(OUT_FILE,`${JSON.stringify({generatedAt:new Date().toISOString(),summary,documents},null,2)}\n`,'utf8');
console.log(`Archive quality: ${summary.documents} documents`);
console.log(`  substantial: ${summary.substantial}`);
console.log(`  short: ${summary.short}`);
console.log(`  fragments: ${summary.fragments}`);
console.log(`  generic titles: ${summary.genericTitles}`);
console.log(`  title review A/B/C/OK: ${summary.titleReviewA}/${summary.titleReviewB}/${summary.titleReviewC}/${summary.titleReviewOK}`);
console.log(`  generic summaries: ${summary.genericSummaries}`);
console.log(`  relation gaps: ${summary.relationGaps}`);
console.log(`  safe title candidates: ${summary.safeTitleCandidates}`);
console.log(`  summary candidates (review): ${summary.summaryCandidates}`);
console.log(`  relation candidates (review): ${summary.relationCandidates}`);
console.log(`  safe relation candidates: ${summary.safeRelationCandidates}`);
