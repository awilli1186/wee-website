---
name: Content
variables:
  - { var: "@value", desc: "Generates content", type: "keyword", req: true }
---

---code---

```less
.content(text);
```

```less
content: 'text';
```

---table---

| Variable | Type    | Default | Description       | Required |
| -------- | ------- | ------- | ----------------- | -------- |
| @value   | keyword | --      | Generates content |          |
| @font    | keyword | --      | Font family rules |          |

---code---

```less
.content(example; georgia);
```

```less
content: 'example';
font-family: georgia;
```