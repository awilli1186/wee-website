---
name: Grid
---

---variables|label:Row &amp; Row-Modify---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @margin | percentage | @gridMargin | Left margin | ✔ |

---code|modifier:split---

```less
div {
	.row(2%);
}
```

```css
div {
	margin-left: -2%;
	max-width: 102%;
}
div:after {
	clear: both;
	content: ' ';
	display: table;
}
```

---code|modifier:split---

```less
.row-modify(2%);
```

```css
margin-left: -2%;
max-width: 102%;
```

---code|modifier:split|label:Row Reset---

```less
.row-reset();
```

```css
margin-left: 0;
max-width: none;
```

---variables|label:Column &amp; Column-Modify---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @width | unit | false | Column width ||

---code|modifier:split---

```less
.column(30%);
```

```css
float: left;
width: 30%;
```

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | --| -- |
| spaced | keyword | -- | Set margin between columns ||
| @share | integer | -- | Column span | ✔ |
| @columns | integer | @gridColumns | Number of columns ||
| @margin | percentage | @gridMargin | Left margin ||

---code|modifier:split---

```less
.column(2; 3);
```

```css
float: left;
width: 66.66666667%;
```

---code|modifier:split---

```less
.column(spaced; 2; 3; 2%);
```

```css
float: left;
width: 64.66666667%;
margin-left: 2%;
```

---code|modifier:split---

```less
.column-modify(spaced; 2; 3; 2%);
```

```css
width: 64.66666667%;
margin-left: 2%;
```

---variables|label:Column Reset---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @resetMargin | boolean | false | Reset left margin ||

---code|modifier:split---

```less
.column-reset(true);
```

```css
float: none;
width: auto;
margin-left: 0;
```

---variables|label:Column Pull &amp; Push---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @share | integer | -- | Column span | ✔ |
| @columns | integer | @gridColumns | Number of columns ||

---code|modifier:split---

```less
.column-pull(2);
```

```css
position: relative;
right: 25%;
```

---code|modifier:split---

```less
.column-push(3; 4);
```

```css
left: 75%;
position: relative;
```

---variables|label:Column Offset---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| spaced | keyword | -- | Set margin between columns ||
| @share | integer | -- | Column span | ✔ |
| @columns | integer | @gridColumns | Number of columns ||
| @margin | percentage | (@gridMargin / 2) | Left margin ||

---code|modifier:split---

```less
.column-offset(2; 4);
```

```css
margin-left: 50%;
```

---code|modifier:split---

```less
.column-offset(spaced; 1; 3; 0.02);
```

```css
margin-left: 33.33%;
```