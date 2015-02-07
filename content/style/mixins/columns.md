---
name: Columns
---

---variables|label:Column &amp; Column-Modify---

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

---variables---

| Variable | Type       | Default      | Description                | Required |
| -------- | ---------- | ------------ | ---------------------------| -------- |
| spaced   | keyword    | --           | Set margin between columns |          |
| @share   | integer    | --           | Column span                | &#10003; |
| @columns | integer    | @gridColumns | Number of columns          |          |
| @margin  | percentage | @gridMargin  | Left margin                |          |

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

---variables|label:Column Reset---

| Variable     | Type    | Default | Description       | Required |
| ------------ | ------- | ------- | ----------------- | -------- |
| @resetMargin | boolean | false   | Reset left margin |          |

---code---

```less
.column-reset(true);
```

```less
float: none;
width: auto;
margin-left: 0;
```

---variables|label:Column Pull &amp; Push---

| Variable | Type    | Default      | Description       | Required |
| -------- | ------- | ------------ | ----------------- | -------- |
| @share   | integer | --           | Column span       | &#10003; |
| @columns | integer | @gridColumns | Number of columns |          |

---code---

```less
.column-pull(2);
```

```less
position: relative;
right: 25%;
```

---code---

```less
.column-push(3; 4);
```

```less
left: 75%;
position: relative;
```

---variables|label:Column Offset---

| Variable | Type       | Default           | Description                | Required |
| -------- | ---------- | ----------------- | -------------------------- | -------- |
| spaced   | keyword    | --                | Set margin between columns |          |
| @share   | integer    | --                | Column span                | &#10003; |
| @columns | integer    | @gridColumns      | Number of columns          |          |
| @margin  | percentage | (@gridMargin / 2) | Left margin                |          |

---code---

```less
.column-offset(2; 4);
```

```less
margin-left: 50%;
```

---code---

```less
.column-offset(spaced; 1; 3; 0.02);
```

```less
margin-left: 33.37333333%;
```