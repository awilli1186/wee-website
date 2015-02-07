---
name: Padding
---

---variables---

| Variable | Type | Default | Description   | Required |
| -------- | ---- | ------- | ------------- | -------- |
| @value   | unit | --      | Padding value | &#10003; |

---code---

```less
.padding(5);
```

```less
padding: 5rem;
```

---variables---

| Variable                 | Type    | Default | Description   | Required |
| ------------------------ | ------- | ------- | ------------- | -------- |
| top, right, bottom, left | keyword | --      | Side presets  | &#10003; |
| @value                   | unit    | --      | Padding value | &#10003; |

---code---

```less
.padding(left; 2);
```

```less
padding-left: 2rem;
```

---variables---

| Variable   | Type    | Default | Description                    | Required |
| ---------- | ------- | ------- | ------------------------------ | -------- |
| horizontal | keyword | --      | Sets padding to @bumperPadding | &#10003; |

---code---

```less
.padding(horizontal);
```

```less
padding-left: 6%;
padding-right: 6%;
```

---variables---

| Variable             | Type    | Default | Description                   | Required |
| -------------------- | ------- | ------- | ----------------------------- | -------- |
| horizontal, vertical | keyword | --      | Horizontal or vertical preset | &#10003; |
| @value               | unit    | --      | Padding value                 | &#10003; |

---code---

```less
.padding(vertical; 2);
```

```less
padding-top: 2rem;
padding-bottom: 2rem;
```

---variables---

| Variable             | Type    | Default | Description                   | Required |
| -------------------- | ------- | ------- | ----------------------------- | -------- |
| horizontal, vertical | keyword | --      | Horizontal or vertical preset | &#10003; |
| @left, @top          | unit    | --      | Left or top padding value     | &#10003; |
| @right, @bottom      | unit    |--       | Right or bottom padding value | &#10003; |

---code---

```less
.padding(horizontal; 2; 3);
```

```less
padding-left: 2rem;
padding-right: 3rem;
```

---variables---

| Variable    | Type | Default | Description        | Required |
| ----------- | ---- | ------- | ------------------ | -------- |
| @vertical   | unit | --      | Vertical padding   | &#10003; |
| @horizontal | unit | --      | Horizontal padding | &#10003; |

---code---

```less
.padding(2; 3);
```

```less
padding-top: 2rem;
padding-right: 3rem;
padding-bottom: 2rem;
padding-left: 3rem;
```

---variables---

| Variable | Type | Default | Description    | Required |
| -------- | ---- | ------- | -------------- | -------- |
| @top     | unit | --      | Top padding    | &#10003; |
| @right   | unit | --      | Right padding  | &#10003; |
| @bottom  | unit | --      | Bottom padding | &#10003; |
| @left    | unit | --      | Left padding   | &#10003; |

---code---

```less
.padding(2; 3; 3; 4);
```

```less
padding-top: 2rem;
padding-right: 3rem;
padding-bottom: 3rem;
padding-left: 4rem;
```

---variables---

| Variable | Type | Default        | Description   | Required |
| -------- | ---- | -------------- | ------------- | -------- |
| @padding | unit | @bumperPadding | Padding value |          |

---code|label:Padded---

```less
.padded(2%);
```

```less
padding-left: 2%;
padding-right: 2%;
```