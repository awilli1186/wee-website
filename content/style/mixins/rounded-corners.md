---
name: Rounded Corners
---

---variables---

| Variable | Type | Default | Description    | Required |
| -------- | ---- | ------- | -------------- | -------- |
| @value   | unit | 3px     | Size of radius |          |

---code---

```less
.rounded(3);
```

```less
background-clip: border-box;
border-radius: 3rem;
```

---variables---

| Variable                 | Type    | Default | Description  | Required |
| ------------------------ | ------- | ------- | ------------ | -------- |
| top, right, bottom, left | keyword | --      | Side presets | &#10003; |
| @value                   | unit    | 3px     | Radius       |          |

---code---

```less
.rounded(top);
```

```less
background-clip: border-box;
border-top-left-radius: 3px;
border-top-right-radius: 3px;
```

---code---

```less
.rounded(right; 5);
```

```less
background-clip: border-box;
border-top-right-radius: 5rem;
border-bottom-right-radius: 5rem;

```

---variables---

| Variable    | Type    | Default | Description           | Required |
| ----------- | ------- | ------- | --------------------- | -------- |
| top, bottom | keyword | --      | Top or bottom preset  | &#10003; |
| left, right | keyword | --      | Left or right  preset | &#10003; |
| @value      | unit    | 3px     | Radius                |          |

---code---

```less
.rounded(bottom; left);
```

```less
background-clip: border-box;
border-bottom-left-radius: 3px;
```

---code---

```less
.rounded(top; right; 4);
```

```less
background-clip: border-box;
border-top-right-radius: 4rem;
```

---variables---

| Variable | Type | Default | Description   | Required |
| -------- | ---- | ------- | ------------- | -------- |
| @top     | unit | --      | Top radius    | &#10003; |
| @right   | unit | --      | Right radius  | &#10003; |
| @bottom  | unit | --      | Bottom radius | &#10003; |
| @left    | unit | --      | Left radius   | &#10003; |

---code---

```less
.rounded(2px; 3rem; 4px; 5px);
```

```less
background-clip: border-box;
border-top-left-radius: 2px;
border-top-right-radius: 3rem;
border-bottom-right-radius: 4px;
border-bottom-left-radius: 5px;
```