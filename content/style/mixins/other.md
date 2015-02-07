---
name: Other
---

---variables|label:Resize---

| Variable | Type    | Default | Description  | Required |
| -------- | ------- | ------- | ------------ | -------- |
| @value   | keyword | --      | Resize value | &#10003; |

---code---

```less
.resize(horizontal);
```

```less
resize: horizontal;
```

---variables|label:Resizable---

| Variable | Type    | Default | Description  | Required |
| -------- | ------- | ------- | ------------ | -------- |
| @value   | keyword | both    | Resize value |          |

---code---

```less
.resizable(vertical);
```

```less
overflow: hidden;
resize: vertical;
```

---code|label:Hide Text---

```less
.hide-text();
```

```less
overflow: hidden;
text-indent: 100%;
white-space: nowrap;
```

---code|label:Hide---

```less
.hide(text);
```

```less
overflow: hidden;
text-indent: 100%;
white-space: nowrap;
```

---variables|label:Selection---

| Variable    | Type                   | Default              | Description          | Required |
| ----------- | ---------------------- | -------------------- | -------------------- | -------- |
| @color      | color                  | @selectionColor      | Selection color      |          |
| @background | color, string, keyword | @selectionBackground | Selection background |          |

---code---

```less
.selection();
```

```less
::-moz-selection {
	text-shadow: none;
	background: #167da3;
	color: #ffffff;
}
::selection {
	text-shadow: none;
	background: #167da3;
	color: #ffffff;
}
```

---variables|label:Cursor---

| Variable | Type    | Default | Description  | Required |
| -------- | ------- | ------- | ------------ | -------- |
| @value   | keyword | pointer | Cursor value |          |

---code---

```less
.cursor();
```

```less
cursor: pointer;
```

---variables|label:Overflow---

| Variable | Type    | Default | Description    | Required |
| -------- | ------- | ------- | -------------- | -------- |
| x, y     | keyword | --      | Overflow axis  |          |
| @value   | keyword | --      | Overflow value | &#10003; |

---code---

```less
.overflow(hidden);
```

```less
overflow: hidden;
```

---code---

```less
.overflow(x; scroll);
```

```less
overflow-x: scroll;
```

---variables---

| Variable | Type    | Default | Description      | Required |
| -------- | ------- | ------- | ---------------- | -------- |
| @x       | keyword | --      | Overflow-x value |          |
| @y       | keyword | --      | Overflow-y value |          |

---code---

```less
.overflow(hidden; scroll);
```

```less
overflow-x: hidden;
overflow-y: scroll;
```

---variables|label:Crop &amp; Scroll---

| Variable             | Type    | Default | Description                   | Required |
| -------------------- | ------- | ------- | ----------------------------- | -------- |
| horizontal, vertical | keyword | --      | Horizontal or vertical preset |          |
| @value               | keyword | true    | Overflow value                |          |

---code---

```less
.crop(both);
```

```less
overflow: hidden;
```

---code---

```less
.crop(vertical);
```

```less
overflow-y: hidden;
```

---code---

```less
.scroll();
```

```less
overflow: scroll;
```

---code---

```less
.scroll(horizontal);
```

```less
overflow-x: scroll;
```

---variables|label:Fill---

| Variable                   | Type           | Default | Description                          | Required |
| -------------------------- | -------------- | ------- | ------------------------------------ | -------- |
| horizontal, vertical, both | keyword        | --      | Horizontal, vertical, or both preset |          |
| @value                     | keyword, color | true    | Fill value                           |          |

---code---

```less
.fill(horizontal);
```

```less
width: 100%;
```

---code---

```less
.fill(blue);
```

```less
fill: #00f;
```

---code---

```less
.fill(both);
```

```less
width: 100%;
height: 100%;
```

---code|label:No-Clear---

```less
.no-clear();
```

```less
::-ms-clear {
	display: none;
}
::-webkit-search-cancel-button {
	-webkit-appearance: none;
}
```