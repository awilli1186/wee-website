---
name: Alignment
---

---doc|label:.wee-container()---

`max-width` and `min-width` are set to the `@maxWidth` and `@minWidth` variables. If `@padContainer` has been set to true, the container will be given left and right padding set by `@bumperPadding`.

---code---

```less
.wee-container();
```

```less
display: block;
margin-left: auto;
margin-right: auto;
-moz-box-sizing: content-box;
-webkit-box-sizing: content-box;
box-sizing: content-box;
max-width: 1280px;
min-width: 260px;
padding-left: 6%;
padding-right: 6%;
```

---table---

| Variable    | Type    | Default | Description          | Required |
| ----------- | ------- | ------- | -------------------- | -------- |
| left, right | keyword | --      | Left or right preset |          |
| @value      | keyword | --      | Float value          | &#10003; |

---code---

```less
.float(left);
```

```less
float: left;
```

---code---

```less
.float(right; 2);
```

```less
float: right;
width: 2rem;
```

---code---

```less
.left();
```

```less
float: left;
```

---code---

```less
.clearfix();
```

```less
clear: both;
content: ' ';
display: table;
```

---table---

| Variable | Type    | Default | Description | Required |
| -------- | ------- | ------- | ----------- | -------- |
| @value   | keyword | both    | Clear value |          |

---code---

```less
.clear(left);
```

```less
clear: left;
```

---table---

| Variable                                                    | Type    | Default | Description | Required |
| ----------------------------------------------------------- | ------- | ------- | ----------- | -------- |
| center, justify, left, right, baseline, bottom, middle, top | keyword | --      | Orientation | &#10003; |

---code---

```less
.align(justify);
```

```less
text-align: justify;
```

---code---

```less
.align(middle);
```

```less
vertical-align: middle;
```

---table---

| Variable | Type    | Default | Description   | Required |
| -------- | ------- | ------- | ------------- | -------- |
| @value   | keyword | --      | Display value | &#10003; |

---code---

```less
.display(block);
```

```less
display: block;
```

---code---

```less
.inline();
```

```less
display: inline;
```

---table---

| Variable | Type | Default | Description | Required |
| -------- | ---- | ------- | ----------- | -------- |
| @width   | unit | --      | Width       |          |
| @height  | unit | --      | Height      |          |

---code---

```less
.inline-block();
```

```less
display: inline-block;
```

---code---

```less
.inline-block(4; 2);
```

```less
display: inline-block;
width: 4rem;
height: 2rem;
```