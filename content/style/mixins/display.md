---
name: Display
---

---code|label:Hidden---

```less
.hidden();
```

```less
visibility: hidden;
```

---code|label:Visible---

```less
.visible();
```

```less
visibility: visible;
```

---variables|label:Block---

| Variable | Type | Default | Description | Required |
| -------- | ---- | ------- | ----------- | -------- |
| @width   | unit | --      | Width       | ✓ |
| @height  | unit | --      | Height      |          |

---code---

```less
.block(4; 3);
```

```less
display: block;
width: 4rem;
height: 3rem;
```

---variables|label:Spaced---

| Variable | Type | Default            | Description   | Required |
| -------- | ---- | ------------------ | ------------- | -------- |
| @margin  | unit | @blockMarginBottom | Bottom margin |          |

---code---

```less
.spaced(0.5);
```

```less
margin-bottom: 0.5rem;
```

---variables|label:Spaced Block---

| Variable | Type | Default            | Description   | Required |
| -------- | ---- | ------------------ | ------------- | -------- |
| @margin  | unit | @blockMarginBottom | Bottom margin |          |
| @width   | unit | --                 | Width         |          |
| @height  | unit | --                 | Height        |          |

---code---

```less
.spaced-block(0.5; 2; 4);
```

```less
display: block;
margin-bottom: 0.5rem;
width: 2rem;
height: 4rem;
```

---variables|label:Box-Sizing---

| Variable | Type    | Default    | Description      | Required |
| -------- | ------- | ---------- | ---------------- | -------- |
| @val     | keyword | border-box | Box-sizing value |          |

---code---

```less
.box-sizing(content-box);
```

```less
-moz-box-sizing: content-box;
-webkit-box-sizing: content-box;
box-sizing: content-box;
```

---code|label:Border-Box---

```less
.border-box();
```

```less
-moz-box-sizing: border-box;
-webkit-box-sizing: border-box;
box-sizing: border-box;
```

---code|label:Content-Box---

```less
.content-box();
```

```less
-moz-box-sizing: content-box;
-webkit-box-sizing: content-box;
box-sizing: content-box;
```