---
'@appski/ui': minor
---

UX audit fixes: add pointer-down press feedback (`active:scale` + 100ms ease-out, reduced-motion aware) to Button, DropdownMenuItem, TabsTrigger and pagination buttons; make Dialog enter/exit animations actually work by importing `tw-animate-css` in the styles entry and keeping content mounted briefly on close so `animate-out` plays; wire `aria-labelledby` to the DialogTitle id, focus the dialog on open with a content fallback (`tabIndex={-1}`); ensure only the top-most stacked dialog closes on Escape (module-level dialog stack); give the Dialog close (✕) button a visible hover (`bg-muted/60`) and focus ring.
