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

// Reference-section labels must start the heading name or label line (after
// optional numbering/decoration) and end at a word boundary, so compound words
// (Energiequellen, Quellenmarker, …) and prose mentioning labels mid-sentence
// never classify as reference sections. The stoplist additionally rejects
// labels that only prefix other kinds of sections (VERWANDTE SYSTEME and
// VERWANDTE FUNDORTE are not cross-reference lists). Only genuine
// "Verwandte Dokumente"/"Quellen" style sections and label lines produce
// non-inline evidence.
const CROSS_REFERENCE_LABEL=/^(?:QUERVERWEISE?|VERWANDTE(?:\s+DOKUMENTE)?|RELATED\s+DOCUMENTS?|SIEHE\s+AUCH|SEE\s+ALSO)\b/i;
const BIBLIOGRAPHY_LABEL=/^(?:REFERENZEN|LITERATUR|QUELLEN|BIBLIOGRAFIE|BIBLIOGRAPHY|REFERENCES|SOURCES|CITATIONS)(?:VERZEICHNIS|NACHWEIS|VERWEISE)?\b/i;
const REFERENCE_LABEL_STOPLIST=/^(?:VERWANDTE\s+(?:SYSTEME|FUNDORTE)|(?:ENERGIE|STÖR|DATEN|SCHWEFEL)QUELLEN|QUELLENMARKER)/i;
// Section numbering/decoration stripped before label matching: numerals
// ("6.", "10.2"), roman ordinals ("VII."), "TEIL VII:", "Anhang A:", "§8",
// list markers and bold.
const SECTION_PREFIX=/^(?:\d+(?:\.\d+)*\.|§\d+|[IVXLCDM]+\.|[A-Z]\.|[-*|]+)\s*/;
const SECTION_PREFIX_WORD=/^(?:TEIL|Teil|Anhang|Appendix|Kapitel)\s+[A-Z0-9]+\s*[:.]?\s*/;
function isCrossReferenceLabel(text){return isReferenceLabel(text,true);}
function isBibliographyLabel(text){return isReferenceLabel(text,false);}
function isReferenceLabel(text,cross){
  text=normalizeLine(text).replace(SECTION_PREFIX,'').replace(SECTION_PREFIX_WORD,'');
  if(REFERENCE_LABEL_STOPLIST.test(text))return false;
  return cross?CROSS_REFERENCE_LABEL.test(text):BIBLIOGRAPHY_LABEL.test(text);
}
function classifyReferenceContexts(body,signature){
  const lines=body.split(/\r?\n/);
  const contexts=new Map();
  let section='inline';
  for(const line of lines){
    const heading=line.match(/^#{1,6}\s+(.+)$/);
    if(heading){
      const name=normalizeLine(heading[1]);
      section=isCrossReferenceLabel(name)?'explicit-cross-reference':isBibliographyLabel(name)?'bibliography':'inline';
    }
    let lineContext=section;
    const labelText=normalizeLine(line.replace(/^\s*[-*|]+\s*/,'').replace(/\*\*/g,''));
    if(isCrossReferenceLabel(labelText)&&/[:：]/.test(labelText))lineContext='explicit-cross-reference';
    else if(isBibliographyLabel(labelText)&&/[:：]/.test(labelText))lineContext='bibliography';
    for(const match of line.matchAll(/\bOTA-[A-Z]+-[A-Z0-9-]+\b/g)){
      const target=match[0];
      if(target===signature)continue;
      if(!contexts.has(target))contexts.set(target,new Set());
      contexts.get(target).add(lineContext);
    }
  }
  return contexts;
}
function preferredReferenceContext(contexts){
  if(contexts.has('explicit-cross-reference'))return 'explicit-cross-reference';
  if(contexts.has('bibliography'))return 'bibliography';
  return 'inline';
}

const documents=files.map(file=>{
  const raw=fs.readFileSync(path.join(DOCS_DIR,file),'utf8');
  const {frontmatter,body}=splitFrontmatter(raw);
  const signature=scalar(frontmatter,'signature')||file.replace(/\.(?:md|mdx)$/i,'');
  const title=scalar(frontmatter,'title'),summary=scalar(frontmatter,'summary'),series=scalar(frontmatter,'series'),year=scalar(frontmatter,'year'),language=scalar(frontmatter,'language'),related=listBlock(frontmatter,'relatedDocuments');
  const bodyWordCount=words(cleanBodyForWords(body)).length,headings=(body.match(/^#{1,4}\s+.+$/gm)??[]).length,images=(body.match(/!\[[^\]]*\]\([^)]*\)/g)??[]).length+(body.match(/<img\b/gi)??[]).length,tables=(body.match(/^\s*\|.*\|\s*$/gm)??[]).length>1?1:0;
  const referenceContexts=classifyReferenceContexts(body,signature);
  const referencedTargets=[...referenceContexts.keys()];
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
  // Reference context improves review prioritization, but no context alone is
  // sufficient evidence to mutate canonical relatedDocuments automatically.
  const relationCandidates=relationGap.map(target=>{
    const contexts=referenceContexts.get(target)??new Set(['inline']);
    const context=preferredReferenceContext(contexts);
    return {target,evidence:context,safe:false,contexts:[...contexts].sort()};
  });
  const candidateCount=(safeTitle?1:0)+(derivedTitle?1:0)+(safeSummary?1:0)+relationCandidates.length;
  return {file,signature,series,year,language,canonical:{title,summary,relatedCount:related.length},extracted:{title:extractedTitle||null,author:extractedAuthor||null,classification:extractedClassification||null,excerpt:excerpt||null},titleReview,candidates:{title:safeTitle?{value:safeTitle,evidence:'explicit-labeled-field',safe:true}:null,derivedTitle:derivedTitle?{value:derivedTitle,evidence:'first-meaningful-heading',safe:false}:null,summary:safeSummary?{value:safeSummary,evidence:'first-substantive-paragraph',safe:false}:null,relations:relationCandidates,count:candidateCount},metrics:{words:bodyWordCount,headings,images,tables,inlineReferenceTargets:referencedTargets.length},quality:{substance,genericTitle,genericSummary,relationGap:relationGap.length>0,flags,priority}};
});

documents.sort((a,b)=>b.quality.priority-a.quality.priority||a.signature.localeCompare(b.signature));
const allRelationCandidates=documents.flatMap(d=>d.candidates.relations);
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
  relationCandidates:allRelationCandidates.length,
  explicitCrossReferenceCandidates:allRelationCandidates.filter(r=>r.evidence==='explicit-cross-reference').length,
  bibliographyRelationCandidates:allRelationCandidates.filter(r=>r.evidence==='bibliography').length,
  inlineRelationCandidates:allRelationCandidates.filter(r=>r.evidence==='inline').length,
  safeRelationCandidates:allRelationCandidates.filter(r=>r.safe).length
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
console.log(`    explicit cross-reference: ${summary.explicitCrossReferenceCandidates}`);
console.log(`    bibliography/reference section: ${summary.bibliographyRelationCandidates}`);
console.log(`    inline/body mention: ${summary.inlineRelationCandidates}`);
console.log(`  safe relation candidates: ${summary.safeRelationCandidates}`);
