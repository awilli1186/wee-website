---
name: Blocks
---

---table---

| Variable  | Type | Default | Description   | Required |
| --------- | ---- | ------- | ------------- | -------- |
| @maxWidth | unit | --      | Maximum width |          |
| @margin   | unit | --      | Bottom margin |          |

---code---

```less
.centered-block();
```

```less
display: block;
margin-left: auto;
margin-right: auto;
```

---code---

```less
.centered-block(5);
```

```less
display: block;
margin-left: auto;
margin-right: auto;
max-width: 5rem;
```

---code---

```less
.centered-block(5; 2);
```

```less
display: block;
margin-left: auto;
margin-right: auto;
max-width: 5rem;
margin-bottom: 2rem;
```