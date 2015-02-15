---
name: Alignment
---

---variables|modifier:options|label:Float---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @value | keyword | left | Left or right ||
| @width | unit | -- | Width value ||

---code|modifier:split---

```less
.float();
```

```css
float: left;
```

---code|modifier:split---

```less
.float(right; 2);
```

```css
float: right;
width: 2rem;
```

---code|modifier:split|label:Left & Right---

```less
.left();
.right();
```

```css
float: left;
float: right;
```

---note---

**Note:** If a value is passed to the left or right mixins they reflect the left and right CSS properties and not float settings.

---code|modifier:split|label:Clearfix---

```less
.clearfix();
```

```css
clear: both;
content: ' ';
display: table;
```

---variables|label:Clear---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @value | keyword | both | Both, left, or right ||

---code|modifier:split---

```less
.clear(left);
```

```css
clear: left;
```

---variables|label:Align---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @value | keyword | -- | Center, justify, left, right, baseline, bottom, middle, or top | ✓ |

---code|modifier:split---

```less
.align(justify);
.align(middle);
```

```less
text-align: justify;
vertical-align: middle;
```

---variables|label:Display---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @value | keyword | -- | Display value | ✓ |

---code|modifier:split---

```less
.display(block);
```

```less
display: block;
```

---code|modifier:split|label:Inline---

```less
.inline();
```

```less
display: inline;
```

---variables|label:Inline-Block---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @width | unit | -- | Width value ||
| @height | unit | -- | Height value ||

---code|modifier:split---

```less
.inline-block();
```

```less
display: inline-block;
```

---code|modifier:split---

```less
.inline-block(4; 2);
```

```less
display: inline-block;
width: 4rem;
height: 2rem;
```