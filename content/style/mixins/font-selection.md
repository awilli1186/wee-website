---
name: Font Selection
---

---variables---

| Variable    | Type    | Default | Description       | Required |
| ----------- | ------- | ------- | ----------------- | -------- |
| @family     | font    | --      | Font family rules | ✓ |
| @size       | unit    | --      | Font size         |          |
| @weight     | unit    | --      | Font weight       |          |
| @lineHeight | unit    | --      | Line height       |          |
| @style      | keyword | --      | Font style        |          |

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