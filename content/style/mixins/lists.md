---
name: Lists
---

---code|label:Inline List---

```less
.inline-list();
```

```less
li {
	display: inline;
}
```

---variables---

| Variable | Type | Default | Description | Required |
| -------- | ---- | ------- | ----------- | -------- |
| @spacing | unit | --      | Left margin |          |

---code---

```less
.inline-list(2);
```

```less
li {
	display: inline;
	margin-left: 2;
}
li:first-child {
	margin-left: 0;
}
```

---variables---

| Variable | Type   | Default | Description  | Required |
| -------- | ------ | ------- | ------------ | -------- |
| @content | string | --      | Content      |          |
| @margin  | unit   | 0       | Right margin |          |

---code---

```less
.inline-list('foo'; 2px);
```

```less
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

---code|label:Floated List---

```less
.floated-list();
```

```less
li {
	float: left;
}
```

---variables|label:List Style---

| Variable | Type       | Default | Description      | Required |
| -------- | ---------- | ------- | ---------------- | -------- |
| @value   | keyword(s) | --      | List-style rules | ✓ |

---code---

```less
.list-style(circle inside);
```

```less
list-style: circle inside;
```

---variables|label:List Position---

| Variable | Type    | Default | Description         | Required |
| -------- | ------- | ------- | ------------------- | -------- |
| @value   | keyword | outside | List-style position |          |

---code---

```less
.list-position(inside);
```

```less
list-style-position: inside;
```

---code|label:Unstyled---

```less
.unstyled();
```

```less
list-style: none;
```