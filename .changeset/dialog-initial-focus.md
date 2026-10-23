---
'@blancski/ui': patch
---

Fix Dialog initial focus: focus now reliably lands inside the dialog on open (the portal mounts content one frame after `open`, which previously left `activeElement` on the trigger). `DialogContent` gains `autoFocusFirst` (default true — focuses first focusable element, falling back to the content container) and `initialFocusRef` (override); elements with a native `autofocus` attribute always win.
