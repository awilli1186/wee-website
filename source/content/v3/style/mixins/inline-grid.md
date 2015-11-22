---
name: Inline Grid
---

---variables|label:Inline Row---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @margin | percentage | [@gridMargin](/style/variables#layout) = 5% | Left margin ||
| @gridSpaceless | boolean | [@gridMargin](/style/variables#layout) = 5% | Add whitespace hack ||

---code|modifier:split---

```less
.selector {
	.inline-row(2%);
}
```

```css
.selector {
	margin-left: -2%;
	max-width: 102%;
	letter-spacing: -.32em;
}
```

---variables|label:Inline Column---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | --| -- |
| spaced | keyword | -- | Set margin between columns ||
| @share | integer | -- | Column span | ✔ |
| @columns | integer | [@gridColumns](/style/variables#layout) = 8 | Number of columns ||
| @gridSpaceless | boolean | [@gridMargin](/style/variables#layout) = 5% | Add whitespace hack ||

---code|modifier:split---

```less
.inline-column(2; 3);
```

```css
width: 66.66666667%;
display: inline-block;
vertical-align: top;
```

---code|modifier:split---

```less
.inline-column(spaced; 2; 3; 2%);
```

```css
margin-left: 2%;
width: 64.66666667%;
display: inline-block;
vertical-align: top;
```