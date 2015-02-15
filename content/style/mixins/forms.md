---
name: Forms
---

---variables|label:Input Placeholder---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @color | color | @inputPlaceholderColor | Placeholder color ||

---code---

```less
.input-placeholder(gray);
```

```less
:-moz-placeholder {
	color: #808080;
}
::-moz-placeholder {
	color: #808080;
}
:-ms-input-placeholder {
	color: #808080;
}
::-webkit-input-placeholder {
	color: #808080;
}
```