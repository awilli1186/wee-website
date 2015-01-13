---
name: Text Styling
---

---code---

```less
.text-sharpen();
```

```less
-moz-osx-font-smoothing: grayscale;
-webkit-font-smoothing: antialiased;
font-smoothing: antialiased;
```

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

---table---

| Variable | Type    | Default | Description          | Required |
| -------- | ------- | ------- | -------------------- | -------- |
| @value   | keyword | none    | Text transform rules |          |

---code---

```less
.text-transform(uppercase);
```

```less
text-transform: uppercase;
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

---table---

| Variable | Type    | Default | Description           | Required |
| -------- | ------- | ------- | --------------------- | -------- |
| @style   | keyword | --      | Text decoration style | ✓        |
| @color   | color   | inherit | Text decoration color |          |

---code---

```less
.underline(solid; white);
```

```less
text-decoration: underline;
-moz-text-decoration-line: underline;
-moz-text-decoration-style: solid;
-moz-text-decoration-color: #fff;
text-decoration: #fff solid underline;
```

---code---

```less
.line-through();
```

```less
text-decoration: line-through;
```

---table---

| Variable | Type    | Default   | Description           | Required |
| -------- | ------- | --------- | --------------------- | -------- |
| @value   | keyword | underline | Text decoration rules |          |

---code---

```less
.text-decoration(overline);
```

```less
text-decoration: overline;
```

---table---

| Variable | Type    | Default | Description | Required |
| -------- | ------- | ------- | ----------- | -------- |
| @line    | keyword | --      | Line type   | ✓        |
| @style   | keyword | --      | Line style  | ✓        |
| @color   | color   | inherit | Line color  |          |

---code---

```less
.text-decoration(underline; dotted; blue);
```

```less
text-decoration: underline;
-moz-text-decoration-line: underline;
-moz-text-decoration-style: dotted;
-moz-text-decoration-color: #00f;
text-decoration: #00f dotted underline;
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
.word-spacing(3);
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
.text-indent(1rem);
```

```less
text-indent: 1rem;
```

---table---

| Variable | Type    | Default | Description                  | Require |
| -------- | ------- | ------- | ---------------------------- | ------- |
| @value   | keyword | none    | Controls selection operation |         |

---code---

```less
.user-select(text);
```

```less
-moz-user-select: text;
-ms-user-select: text;
-webkit-user-select: text;
user-select: text;
```

---table---

| Variable | Type    | Default           | Description | Required |
| -------- | ------- | ----------------- | ----------- | -------- |
| @value   | integer | @codeBlockTabSize | Tab length  |          |

---code---

```less
.tab-size(4);
```

```less
-moz-tab-size: 4;
tab-size: 4;
```