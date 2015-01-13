---
name: Font Size
variables:
  - { var: "@value", desc: "Font size rules", type: "unit", default: "@baseFontSize" }
---

---code---

```less
.font-size(2);
```

```less
font-size: 2rem;
```

---table---

| Variable    | Type | Default | Description       | Required |
| ----------- | ---- | ------- | ----------------- | :------: |
| @value      | unit | --      | Font size rules   | ✓        |
| @lineHeight | unit | --      | Line height rules | ✓        |

---code---

```less
.font-size(3; 1.6);
```

```less
font-size: 3rem;
line-height: 1.6rem;
```