from pathlib import Path

TARGETS = [
    "OTA-CUL-0002-60000BCE-DE.md",
    "OTA-CUL-0013-MULTI-DE.md",
    "OTA-CUL-0015-MULTI-DE.md",
    "OTA-CUL-0016-MULTI-DE.md",
    "OTA-OBS-0007-1700BCE-DE.md",
    "OTA-SCI-0018-60000BCE-DE.md",
]
ROOT = Path("src/content/documents")
modified = []

for name in TARGETS:
    path = ROOT / name
    text = path.read_text(encoding="utf-8")
    sig = path.stem
    if text.startswith("---\n"):
        end = text.find("\n---", 4)
        if end == -1:
            raise SystemExit(f"Unclosed frontmatter: {name}")
        front = text[4:end]
        if "\nkg:\n" in "\n" + front:
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
        text = (
            "---\n"
            f"signature: \"{sig}\"\n"
            "kg:\n"
            "  schema: KXF-0.2\n"
            "  master: kueper-knowledge-graph\n"
            f"  documentId: \"{sig}\"\n"
            f"  graphId: \"DOC:OTA:{sig}\"\n"
            "  system: SYS:OTA:overtimearchive\n"
            "  sourceOfTruth: false\n"
            "---\n\n" + text
        )
    path.write_text(text, encoding="utf-8")
    modified.append(name)

report = Path("reports/kg-registration-nonstandard-signatures-20260719.md")
report.write_text(
    "# KG Registration — Nonstandard OTA Signatures\n\n"
    "These documents use valid OTA temporal markers outside the four-digit CE-year pattern. "
    "They now carry canonical KXF-0.2 `kg:` metadata.\n\n" +
    "\n".join(f"- `{name}`" for name in modified) + "\n",
    encoding="utf-8",
)
