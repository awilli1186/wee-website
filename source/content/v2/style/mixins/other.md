---
name: Other
---

---variables|label:Resize---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @value | keyword | -- | Resize value | ✓ |

---code|modifier:split---

```less
.resize(horizontal);
```

```css
resize: horizontal;
```

---variables|label:Resizable---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @value | keyword | both | Resize value ||

---code|modifier:split---

```less
.resizable(vertical);
```

```css
overflow: hidden;
resize: vertical;
```

---code|modifier:split|label:Hide Text---

```less
.hide-text();
```

```css
overflow: hidden;
text-indent: 100%;
white-space: nowrap;
```

---code|modifier:split|label:Hide---

```less
.hide(text);
```

```css
overflow: hidden;
text-indent: 100%;
white-space: nowrap;
```

---variables|label:Selection---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @color | color | @selectionColor | Selection color ||
| @background | color, string, keyword | @selectionBackground | Selection background ||

---code|modifier:split---

```less
.selection();
```

```css
::-moz-selection {
	text-shadow: none;
	background: #167da3;
	color: #ffffff;
}
::selection {
	text-shadow: none;
	background: #167da3;
	color: #ffffff;
}
```

---variables|label:Cursor---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @value | keyword | pointer | Cursor value ||

---code|modifier:split---

```less
.cursor();
```

```css
cursor: pointer;
```

---variables|label:Overflow---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| x, y | keyword | -- | Overflow axis ||
| @value | keyword | -- | Overflow value | ✓ |

---code|modifier:split---

```less
.overflow(hidden);
```

```css
overflow: hidden;
```

---code|modifier:split---

```less
.overflow(x; scroll);
```

```css
overflow-x: scroll;
```

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @x | keyword | -- | Overflow-x value ||
| @y | keyword | -- | Overflow-y value ||

---code|modifier:split---

```less
.overflow(hidden; scroll);
```

```css
overflow-x: hidden;
overflow-y: scroll;
```

---variables|label:Crop & Scroll---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| horizontal, vertical | keyword | -- | Horizontal or vertical preset ||
| @value | keyword | true | Overflow value ||

---code|modifier:split---

```less
.crop(both);
```

```css
overflow: hidden;
```

---code|modifier:split---

```less
.crop(vertical);
```

```css
overflow-y: hidden;
```

---code|modifier:split---

```less
.scroll();
```

```css
overflow: scroll;
```

---code|modifier:split---

```less
.scroll(horizontal);
```

```css
overflow-x: scroll;
```

---variables|label:Fill---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| horizontal, vertical, both | keyword | -- | Horizontal, vertical, or both preset ||
| @value | keyword, color | true | Fill value ||

---code|modifier:split---

```less
.fill(horizontal);
```

```css
width: 100%;
```

---code|modifier:split---

```less
.fill(blue);
```

```css
fill: #00f;
```

---code|modifier:split---

```less
.fill(both);
```

```css
width: 100%;
height: 100%;
```

---code|modifier:split|label:No-Clear---

```less
.no-clear();
```

```css
::-ms-clear {
	display: none;
}
::-webkit-search-cancel-button {
	-webkit-appearance: none;
}
```