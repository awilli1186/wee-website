---
name: Text Shadows
variables:
  - { var: "@value", desc: "Advanced text shadow rules", type: "string, keyword", default: "'1px 1px 0 rgba(0, 0, 0, @{defaultOpacity})'" }
---

---code---

```less
.text-shadow('5px 5px 0 rgba(0, 0, 0, @{defaultOpacity})');
```

```less
text-shadow: 5px 5px 0 rgba(0,0,0,.2);
```

---code---

```less
.text-shadow(blue);
```

```less
text-shadow: 1px 1px 0 blue;
```