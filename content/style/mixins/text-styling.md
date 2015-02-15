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

---variables|label:Text Transform---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @value | keyword | none | Text transform rules ||

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

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @style | keyword | -- | Text decoration style | ✓ |
| @color | color | inherit | Text decoration color ||

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

---variables|label:Text Decoration---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @value | keyword | underline | Text decoration rules ||

---code---

```less
.text-decoration(overline);
```

```less
text-decoration: overline;
```

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @line | keyword | -- | Line type | ✓ |
| @style | keyword | -- | Line style | ✓ |
| @color | color | inherit | Line color ||

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

---variables|label:Outline---

| Variable | Type | Default | Description | Require |
| -- | -- | -- | -- | -- |
| @value | keyword | 'thin dotted' | Element outline rules ||

---code---

```less
.outline();
```

```less
outline: thin dotted;
```

---variables|label:Letter Spacing---

| Variable | Type | Default | Description | Require |
| -- | -- | -- | -- | -- |
| @value | unit | -- | Letter kerning rules | ✓ |

---code---

```less
.letter-spacing(2);
```

```less
letter-spacing: 2rem;
```

---variables|label:Word Spacing---

| Variable | Type | Default | Description | Require |
| -- | -- | -- | -- | -- |
| @value | unit | -- | Word spacing rules | ✓ |

---code---

```less
.word-spacing(3);
```

```less
word-spacing: 3rem;
```

---variables|label:Text Indent---

| Variable | Type | Default | Description | Require |
| -- | -- | -- | -- | -- |
| @value | unit | -- | Text indention rules | ✓ |

---code---

```less
.text-indent(1rem);
```

```less
text-indent: 1rem;
```

---variables|label:User Select---

| Variable | Type | Default | Description | Require |
| -- | -- | -- | -- | -- |
| @value | keyword | none | Controls selection operation ||

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

---variables|label:Tab Size---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @value | integer | @codeBlockTabSize | Tab length ||

---code---

```less
.tab-size(4);
```

```less
-moz-tab-size: 4;
tab-size: 4;
```