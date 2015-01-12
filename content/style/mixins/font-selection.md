---
name: Font Selection
variables:
  - { var: "@family", desc: "", type: "font", default: "Font family rules", req: true }
  - { var: "@size", desc: "", type: "unit", default: "Font size rules", req: true }
  - { var: "@weight", desc: "", type: "unit", default: "Font weight rules", req: true }
  - { var: "@lineHeight", desc: "", type: "unit", default: "Line height rules", req: true }
  - { var: "@style", desc: "", type: "keyword", default: "Font style rules", req: true }
---

---code---

```less
.font(helvetica; 2; 100; 2; italic);
```

```less
font-family: helvetica;
font-size: 2rem;
font-weight: 100;
line-height: 2rem;
font-style: italic;
```