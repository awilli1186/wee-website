---
name: Text Styling
---

---code|modifier:split|label:Text Sharpen---

```less
.text-sharpen();
```

```css
-moz-osx-font-smoothing: grayscale;
-webkit-font-smoothing: antialiased;
font-smoothing: antialiased;
```

---code|modifier:split|label:Capitalize---

```less
.capitalize();
```

```css
text-transform: capitalize;
```

---code|modifier:split|label:Lowercase---

```less
.lowercase();
```

```css
text-transform: lowercase;
```

---code|modifier:split|label:Uppercase---

```less
.uppercase();
```

```css
text-transform: uppercase;
```

---variables|label:Text Transform---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @value | keyword | none | Text transform rules ||

---code|modifier:split---

```less
.text-transform(uppercase);
```

```css
text-transform: uppercase;
```

---code|modifier:split|label:No-Wrap---

```less
.no-wrap();
```

```css
white-space: nowrap;
```

---code|modifier:split|label:Ellipsis---

```less
.ellipsis();
```

```css
overflow-x: hidden;
text-overflow: ellipsis;
white-space: nowrap;
```

---code|modifier:split|label:Underline---

```less
.underline();
```

```css
text-decoration: underline;
```

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @style | keyword | -- | Text decoration style | ✔ |
| @color | color | inherit | Text decoration color ||

---code|modifier:split---

```less
.underline(solid; white);
```

```css
text-decoration: underline;
-moz-text-decoration-line: underline;
-moz-text-decoration-style: solid;
-moz-text-decoration-color: #fff;
text-decoration: #fff solid underline;
```

---code|modifier:split|label:Line-Through---

```less
.line-through();
```

```css
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

```css
text-decoration: overline;
```

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @line | keyword | -- | Line type | ✔ |
| @style | keyword | -- | Line style | ✔ |
| @color | color | inherit | Line color ||

---code|modifier:split---

```less
.text-decoration(underline; dotted; blue);
```

```css
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

---code|modifier:split---

```less
.outline();
```

```css
outline: thin dotted;
```

---variables|label:Letter Spacing---

| Variable | Type | Default | Description | Require |
| -- | -- | -- | -- | -- |
| @value | unit | -- | Letter kerning rules | ✔ |

---code|modifier:split---

```less
.letter-spacing(2);
```

```css
letter-spacing: 2rem;
```

---variables|label:Word Spacing---

| Variable | Type | Default | Description | Require |
| -- | -- | -- | -- | -- |
| @value | unit | -- | Word spacing rules | ✔ |

---code|modifier:split---

```less
.word-spacing(3);
```

```css
word-spacing: 3rem;
```

---variables|label:Text Indent---

| Variable | Type | Default | Description | Require |
| -- | -- | -- | -- | -- |
| @value | unit | -- | Text indention rules | ✔ |

---code|modifier:split---

```less
.text-indent(1rem);
```

```css
text-indent: 1rem;
```

---variables|label:User Select---

| Variable | Type | Default | Description | Require |
| -- | -- | -- | -- | -- |
| @value | keyword | none | Controls selection operation ||

---code|modifier:split---

```less
.user-select(text);
```

```css
-moz-user-select: text;
-ms-user-select: text;
-webkit-user-select: text;
user-select: text;
```

---variables|label:Tab Size---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @value | integer | @codeBlockTabSize | Tab length ||

---code|modifier:split---

```less
.tab-size(4);
```

```css
-moz-tab-size: 4;
tab-size: 4;
```