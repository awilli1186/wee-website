---
name: Lists
---

---code|modifier:split|label:Inline List---

```less
.inline-list();
```

```css
li {
	display: inline;
}
```

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @spacing | unit | -- | Left margin ||

---code|modifier:split---

```less
.inline-list(2);
```

```css
li {
	display: inline;
	margin-left: 2;
}
li:first-child {
	margin-left: 0;
}
```

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @content | string | -- | Content ||
| @margin | unit | 0 | Right margin ||

---code|modifier:split---

```less
.inline-list('foo'; 2px);
```

```css
li {
	display: inline;
	margin-right: 2px;
}
li:before {
	content: 'foo';
	margin-right: 2px;
}
li:first-child:before {
	display: none;
}
```

---variables|label:List Style---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @value | keyword(s) | -- | List-style rules | ✓ |

---code|modifier:split---

```less
.list-style(circle inside);
```

```css
list-style: circle inside;
```

---variables|label:List Position---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @value | keyword | outside | List-style position ||

---code|modifier:split---

```less
.list-position(inside);
```

```css
list-style-position: inside;
```

---code|modifier:split|label:Unstyled---

```less|modifier:split
.unstyled();
```

```css
list-style: none;
```