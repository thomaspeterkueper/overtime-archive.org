from pathlib import Path

OLD = "Adaptive Vakuum-Interaktion"
NEW = "Axiomatisches Vakuum-Integral"
ROOT = Path("src/content/documents")
TARGETS = [
    "OTA-FND-0005-2025-DE.md",
    "OTA-FND-0012-2026-DE.md",
    "OTA-FND-0013-2026-DE.md",
    "OTA-FND-0015-2026-DE.md",
    "OTA-OBS-0005-2026-DE.md",
    "OTA-SCI-0009-2025-DE.md",
    "OTA-SCI-0026-2026-DE.md",
    "OTA-TEC-0004-2087-DE.md",
    "OTA-TEC-0029-2026-DE.md",
]

for name in TARGETS:
    path = ROOT / name
    if not path.exists():
        raise SystemExit(f"Missing target: {path}")
    text = path.read_text(encoding="utf-8")
    if name == "OTA-FND-0005-2025-DE.md":
        # Preserve the historically documented wrong-to-wrong correction in v1.1.
        marker = "__AVI_LEGACY_REVISION__"
        historical = "AVI = Adaptive\n                     Vakuum-Interaktion"
        if historical in text:
            text = text.replace(historical, marker, 1)
        text = text.replace(OLD, NEW)
        text = text.replace(marker, historical)
        note = (
            "\n**Kanonische Korrektur 2026-07-19:** AVI wird ab dieser Revision "
            "ausschließlich als **Axiomatisches Vakuum-Integral** geführt. "
            "Der v1.1-Revisionsvermerk bleibt als historische Dokumentation einer "
            "damaligen Fehlkorrektur unverändert erhalten.\n"
        )
        if "Kanonische Korrektur 2026-07-19" not in text:
            text = text.replace("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n**ENDE DOKUMENT**", note + "\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n**ENDE DOKUMENT**")
    else:
        text = text.replace(OLD, NEW)
    path.write_text(text, encoding="utf-8")

open_task = Path("external-tasks/open/KG-REQ-20260719-avi-akronym-korrektur.md")
done_task = Path("external-tasks/done/KG-REQ-20260719-avi-akronym-korrektur.md")
if open_task.exists():
    task = open_task.read_text(encoding="utf-8")
    task = task.replace("Status: open", "Status: done", 1)
    task += "\n\n## Erledigt (2026-07-19)\n\nAlle neun betroffenen OTA-Dokumente wurden auf die kanonische Auflösung `AVI = Axiomatisches Vakuum-Integral` korrigiert. In OTA-FND-0005 bleibt der historische v1.1-Fehlkorrekturvermerk als Revisionsgeschichte erhalten und wird durch einen neuen kanonischen Korrekturhinweis eingeordnet.\n"
    done_task.write_text(task, encoding="utf-8")
    open_task.unlink()
