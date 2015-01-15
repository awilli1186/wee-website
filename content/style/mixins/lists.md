---
name: Lists
---

---table---

| Variable | Type | Default | Description | Required |
| -------- | ---- | ------- | ----------- | -------- |
| @spacing | unit | --      | Left margin |          |

---code---

```less
.inline-list();
```

```less
li {
	display: inline;
}
```

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

---code---

```less
.floated-list();
```

```less
li {
	float: left;
}
```

---table---

| Variable | Type       | Default | Description      | Required |
| -------- | ---------- | ------- | ---------------- | -------- |
| @value   | keyword(s) | --      | List-style rules | &#10003; |

---code---

```less
.list-style(circle inside);
```

```less
list-style: circle inside;
```

---table---

| Variable | Type    | Default | Description         | Required |
| -------- | ------- | ------- | ------------------- | -------- |
| @value   | keyword | outside | List-style position |          |

---code---

```less
.list-style-position(inside);
```

```less
list-style-position: inside;
```

---code---

```less
.list-position(inside);
```

```less
list-style-position: inside;
```

---code---

```less
.unstyled();
```

```less
list-style: none;
```