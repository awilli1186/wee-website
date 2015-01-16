---
name: Text Styling
---

---code|label:Text Sharpen---

```less
.text-sharpen();
```

```less
-moz-osx-font-smoothing: grayscale;
-webkit-font-smoothing: antialiased;
font-smoothing: antialiased;
```

---code|label:Capitalize---

```less
.capitalize();
```

```less
text-transform: capitalize;
```

---code|label:Lowercase---

```less
.lowercase();
```

```less
text-transform: lowercase;
```

---code|label:Uppercase---

```less
.uppercase();
```

```less
text-transform: uppercase;
```

---table|label:Text Transform---

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

---code|label:No-Wrap---

```less
.no-wrap();
```

```less
white-space: nowrap;
```

---code|label:Ellipsis---

```less
.ellipsis();
```

```less
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
```

---code|label:Underline---

```less
.underline();
```

```less
text-decoration: underline;
```

---table---

| Variable | Type    | Default | Description           | Required |
| -------- | ------- | ------- | --------------------- | -------- |
| @style   | keyword | --      | Text decoration style | &#10003;        |
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

---code|label:Line-Through---

```less
.line-through();
```

```less
text-decoration: line-through;
```

---table|label:Text Decoration---

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
| @line    | keyword | --      | Line type   | &#10003;        |
| @style   | keyword | --      | Line style  | &#10003;        |
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

---table|label:Outline---

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

---table|label:Letter Spacing---

| Variable | Type | Default | Description          | Require |
| -------- | ---- | ------- | -------------------- | ------- |
| @value   | unit | --      | Letter kerning rules | &#10003;       |

---code---

```less
.letter-spacing(2);
```

```less
letter-spacing: 2rem;
```

---table|label:Word Spacing---

| Variable | Type | Default | Description        | Require |
| -------- | ---- | ------- | ------------------ | ------- |
| @value   | unit | --      | Word spacing rules | &#10003;       |

---code---

```less
.word-spacing(3);
```

```less
word-spacing: 3rem;
```

---table|label:Text Indent---

| Variable | Type | Default | Description          | Require |
| -------- | ---- | ------- | -------------------- | ------- |
| @value   | unit | --      | Text indention rules | &#10003;       |

---code---

```less
.text-indent(1rem);
```

```less
text-indent: 1rem;
```

---table|label:User Select---

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

---table|label:Tab Size---

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