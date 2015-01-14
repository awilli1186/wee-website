---
name: Positioning
---

---table---

| Variable | Type | Default | Description | Required |
| -------- | ---- | ------- | ----------- | -------- |
| @value   | unit | 0       | Amount      |          |

---code---

```less
.top(4);
```

```less
top: 4rem;
```

---code---

```less
.right(2);
```

```less
right: 2rem;
```

---table---

| Variable | Type    | Default | Description | Required |
| -------- | ------- | ------- | ----------- | -------- |
| @value   | keyword | --      | Positioning | &#10003;        |
| @top     | unit    | --      | Top         |          |
| @right   | unit    | --      | Right       |          |
| @bottom  | unit    | --      | Bottom      |          |
| @left    | unit    | --      | Left        |          |

---code---

```less
.position(fixed; 4px; 3; 2%; 1rem);
```

```less
position: fixed;
top: 4px;
right: 3rem;
bottom: 2%;
left: 1rem;
```

---code---

```less
.absolute();
```

```less
position: absolute;
```

---code---

```less
.absolute(3; 2);
```

```less
position: absolute;
top: 3rem;
right: 2rem;
```

---code---

```less
.fixed(2rem);
```

```less
position: fixed;
top: 2rem;
```

---code---

```less
.relative();
```

```less
position: relative;
```

---code---

```less
.static();
```

```less
position: static;
```

---table---

| Variable | Type    | Default | Description | Required |
| -------- | ------- | ------- | ----------- | -------- |
| @index   | integer | 1       | Z-index     |          |

---code---

```less
.z-index(4);
```

```less
z-index: 4;
```