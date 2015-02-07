---
name: Margin
---

---variables---

| Variable | Type | Default | Description  | Required |
| -------- | ---- | ------- | ------------ | -------- |
| @value   | unit | --      | Margin value | &#10003; |

---code---

```less
.margin(5);
```

```less
margin: 5rem;
```

---variables---

| Variable                 | Type    | Default | Description  | Required |
| ------------------------ | ------- | ------- | ------------ | -------- |
| top, right, bottom, left | keyword | --      | Side presets | &#10003; |
| @value                   | unit    | --      | Margin value |          |

---code---

```less
.margin(left; 2);
```

```less
margin-left: 2rem;
```

---variables---

| Variable             | Type    | Default | Description                   | Required |
| -------------------- | ------- | ------- | ----------------------------- | -------- |
| horizontal, vertical | keyword | --      | Horizontal or vertical preset | &#10003; |
| @value               | unit    | --      | Margin value                  |          |


---code---

```less
.margin(vertical; 2);
```

```less
margin-top: 2rem;
margin-bottom: 2rem;
```

---variables---

| Variable             | Type    | Default | Description                   | Required |
| -------------------- | ------- | ------- | ----------------------------- | -------- |
| horizontal, vertical | keyword | --      | Horizontal or vertical preset | &#10003; |
| @left, @top          | unit    | --      | Margin value                  |          |
| @right, @bottom      | unit    | --      | Margin value                  |          |

---code---

```less
.margin(horizontal; 2; 3);
```

```less
margin-left: 2rem;
margin-right: 3rem;
```

---variables---

| Variable | Type | Default | Description        | Required |
| -------- | ---- | ------- | ------------------ | -------- |
| @y       | unit | --      | Vertical margins   |          |
| @x       | unit | --      | Horizontal margins |          |

---code---

```less
.margin(2; 3);
```

```less
margin-top: 2rem;
margin-right: 3rem;
margin-bottom: 2rem;
margin-left: 3rem;
```

---variables---

| Variable | Type | Default | Description   | Required |
| -------- | ---- | ------- | ------------- | -------- |
| @top     | unit | --      | Top margin    |          |
| @right   | unit | --      | Right margin  |          |
| @bottom  | unit | --      | Bottom margin |          |
| @left    | unit | --      | Left margin   |          |

---code---

```less
.margin(2; 3; 3; 4);
```

```less
margin-top: 2rem;
margin-right: 3rem;
margin-bottom: 3rem;
margin-left: 4rem;
```