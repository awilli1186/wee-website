---
name: Columns
---

---table---

| Variable | Type | Default | Description  | Required |
| -------- | ---- | ------- | ------------ | -------- |
| @width   | unit | false   | Column width |          |

---code---

```less
.column(30%);
```

```less
float: left;
width: 30%;
```

---table---

| Variable | Type    | Default      | Description    | Required |
| -------- | ------- | ------------ | ---------------| -------- |
| spaced   | keyword | --           | Spaced columns |          |
| @share   | integer | --           | Column size    | &#10003; |
| @columns | integer | @gridColumns | Total columns  |          |
| @margin  | unit    | @gridMargin  | Column margin  |          |

---code---

```less
.column(2; 3);
```

```less
float: left;
width: 66.66666667%;
```

---code---

```less
.column(spaced; 2; 3; 2%);
```

```less
float: left;
width: 64.66666667%;
margin-left: 2%;
```

---code---

```less
.column-modify(spaced; 2; 3; 2%);
```

```less
width: 64.66666667%;
margin-left: 2%;
```