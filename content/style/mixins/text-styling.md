---
name: Text Styling
---

---code---

```less
.capitalize();
```

```less
text-transform: capitalize;
```

---code---

```less
.lowercase();
```

```less
text-transform: lowercase;
```

---code---

```less
.uppercase();
```

```less
text-transform: uppercase;
```

---code---

```less
.text-transform();
```

```less
text-transform: none;
```

---code---

```less
.no-wrap();
```

```less
white-space: nowrap;
```

---code---

```less
.ellipsis();
```

```less
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
```

---code---

```less
.underline();
```

```less
text-decoration: underline;
```

---code---

```less
.underline(solid; white);
```

```less
text-decoration: #fff solid underline;
```

---table---

| Variable | Type    | Default       | Description           | Require |
| -------- | ------- | ------------- | --------------------- | ------- |
| @value   | keyword | 'thin dotted' | Element outline rules |         |

---code---

```less
.outline();
```

```less
outline: thin dotted;
```

---table---

| Variable | Type | Default | Description          | Require |
| -------- | ---- | ------- | -------------------- | ------- |
| @value   | unit | --      | Letter kerning rules | ✓       |

---code---

```less
.letter-spacing(2);
```

```less
letter-spacing: 2rem;
```

---table---

| Variable | Type | Default | Description        | Require |
| -------- | ---- | ------- | ------------------ | ------- |
| @value   | unit | --      | Word spacing rules | ✓       |

---code---

```less
.word-spacing();
```

```less
word-spacing: 3rem;
```

---table---

| Variable | Type | Default | Description          | Require |
| -------- | ---- | ------- | -------------------- | ------- |
| @value   | unit | --      | Text indention rules | ✓       |

---code---

```less
.text-indent(1px);
```

```less
text-indent: 1px;
```

---table---

| Variable | Type    | Default | Description                  | Require |
| -------- | ------- | ------- | ---------------------------- | ------- |
| @value   | keyword | none    | Controls selection operation | ✓       |

---code---

```less
.user-select(text);
```

```less
user-select: text;
```