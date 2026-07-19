from pathlib import Path
import re

DOCS = Path("src/content/documents")
REPORT = Path("reports/kg-registration-batch-20260719.md")
TASK_OPEN = Path("external-tasks/open/OTA-REQ-20260718-001.md")
TASK_DONE = Path("external-tasks/done/OTA-REQ-20260718-001.md")
SIG_RE = re.compile(r"OTA-[A-Z]+-[0-9]{4}-[0-9]{4}-[A-Z]{2}")

modified = []
already = []
skipped = []

for path in sorted(DOCS.glob("*.md")):
    text = path.read_text(encoding="utf-8")
    match = SIG_RE.search(path.stem) or SIG_RE.search(text[:2000])
    if not match:
        skipped.append((path.name, "no canonical OTA signature detected"))
        continue
    sig = match.group(0)

    if text.startswith("---\n"):
        end = text.find("\n---", 4)
        if end == -1:
            skipped.append((path.name, "unclosed frontmatter"))
            continue
        front = text[4:end]
        if re.search(r"(?m)^kg:\s*$", front):
            already.append(path.name)
            continue
        kg = (
            "\nkg:\n"
            "  schema: KXF-0.2\n"
            "  master: kueper-knowledge-graph\n"
            f"  documentId: \"{sig}\"\n"
            f"  graphId: \"DOC:OTA:{sig}\"\n"
            "  system: SYS:OTA:overtimearchive\n"
            "  sourceOfTruth: false\n"
        )
        text = text[:end] + kg + text[end:]
    else:
        front = (
            "---\n"
            f"signature: \"{sig}\"\n"
            "kg:\n"
            "  schema: KXF-0.2\n"
            "  master: kueper-knowledge-graph\n"
            f"  documentId: \"{sig}\"\n"
            f"  graphId: \"DOC:OTA:{sig}\"\n"
            "  system: SYS:OTA:overtimearchive\n"
            "  sourceOfTruth: false\n"
            "---\n\n"
        )
        text = front + text

    path.write_text(text, encoding="utf-8")
    modified.append(path.name)

REPORT.parent.mkdir(parents=True, exist_ok=True)
lines = [
    "# OTA KG Registration Batch — 2026-07-19",
    "",
    "Canonical metadata model: KXF-0.2 / `DOC:OTA:<signature>`.",
    "",
    f"- Newly equipped with `kg:` metadata: **{len(modified)}**",
    f"- Already KG-ready: **{len(already)}**",
    f"- Skipped for manual review: **{len(skipped)}**",
    "",
    "## Modified",
    "",
] + [f"- `{x}`" for x in modified] + ["", "## Already ready", ""] + [f"- `{x}`" for x in already] + ["", "## Manual review", ""] + [f"- `{x}` — {reason}" for x, reason in skipped]
REPORT.write_text("\n".join(lines) + "\n", encoding="utf-8")

if TASK_OPEN.exists():
    task = TASK_OPEN.read_text(encoding="utf-8")
    task = task.replace("status: open", "status: done", 1)
    task += (
        "\n\n## Erledigt (2026-07-19)\n\n"
        f"Batch gegen den aktuellen OTA-KXF-0.2-Standard ausgeführt. Neu ergänzt: {len(modified)}; bereits KG-ready: {len(already)}; manuell zu prüfen: {len(skipped)}. "
        "Der detaillierte Audit liegt unter `reports/kg-registration-batch-20260719.md`. "
        "Der frühere Blocker KG-REQ-20260718-004 ist im Knowledge Graph geschlossen.\n"
    )
    TASK_DONE.write_text(task, encoding="utf-8")
    TASK_OPEN.unlink()
