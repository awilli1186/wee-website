---
name: Content
variables:
  - { var: "@value", desc: "Content", type: "string, keyword", default: "' '" }
  - { var: "@font", desc: "Font family", type: "string, keyword", default: "false" }
---

---code---

```less
.content(text);
```

```less
content: 'text';
```

---code---

```less
.content(example; georgia);
```

```less
content: 'example';
font-family: georgia;
```