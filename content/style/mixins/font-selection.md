---
name: Font Selection
variables:
  - { var: "@family", desc: "Font family rules", type: "font", req: true }
  - { var: "@size", desc: "Font size rules", type: "unit" }
  - { var: "@weight", desc: "Font weight rules", type: "unit" }
  - { var: "@lineHeight", desc: "Line height rules", type: "unit" }
  - { var: "@style", desc: "Font style rules", type: "keyword" }
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