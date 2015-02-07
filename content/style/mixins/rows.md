---
name: Rows
---

---variables|label:Row &amp; Row-Modify---

| Variable | Type       | Default     | Description  | Required |
| -------- | ---------- | ----------- | ------------ | -------- |
| @margin  | percentage | @gridMargin | Left margin  | &#10003; |

---code---

```less
div {
	.row(2%);
}
```

```less
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

---code---

```less
.row-modify(2%);
```

```less
margin-left: -2%;
max-width: 102%;
```

---code|label:Row Reset---

```less
.row-reset();
```

```less
margin-left: 0;
max-width: none;
```