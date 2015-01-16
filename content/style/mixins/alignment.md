---
name: Alignment
---

---doc|label:Wee Container---

Create a centered container based on @minWidth, @minWidth, and @padContainer.

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

---table|label:Float---

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

---code|label:Left &amp; Right---

```less
.left();
```

```less
float: left;
```

---code---

```less
.right();
```

```less
float: right;
```

---code|label:Clearfix---

```less
.clearfix();
```

```less
clear: both;
content: ' ';
display: table;
```

---table|label:Clear---

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

---table|label:Align---

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

---table|label:Display---

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

---code|label:Inline---

```less
.inline();
```

```less
display: inline;
```

---table|label:Inline-Block---

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