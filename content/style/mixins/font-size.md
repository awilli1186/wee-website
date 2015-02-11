---
name: Font Size
---

---variables---

| Variable | Type | Default       | Description | Required |
| -------- | ---- | ------------- | ----------- | -------- |
| @value   | unit | @baseFontSize | Font size   |          |

---code---

```less
.font-size(2);
```

```less
font-size: 2rem;
```

---variables---

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