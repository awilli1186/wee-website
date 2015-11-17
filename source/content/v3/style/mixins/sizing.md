---
name: Sizing
---

---variables|label:Width &amp; Height---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @value | unit | -- | Width or Height | ✓ |
| @maxWidth, @maxHeight | unit | -- | Maximum ||

---code|modifier:split---

```less
.width(4; 5);
.height(3; 40%);
```

```css
width: 4rem;
max-width: 5rem;
height: 3rem;
max-height: 40%;
```

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @value | unit | -- | Minimum or maximum | ✓ |

---code|modifier:split---

```less
.max-width(4rem);
.min-width(2rem);
```

```css
max-width: 4rem;
min-width: 2rem;
```

---code|modifier:split---

```less
.max-height(5rem);
.min-height(3rem);
```

```css
max-height: 5rem;
min-height: 3rem;
```

---variables|label:Size---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @width | unit | -- | Width or Width/Height | ✓ |
| @height | unit | -- | Height ||

---code|modifier:split---

```less
.size(15);
.size(100px; 6);
```

```css
height: 15rem;
width: 15rem;

height: 6rem;
width: 100px;
```

---code|modifier:split---

```less
.min-size(12);
.min-size(2; 3);

.max-size(20);
.max-size(4; 5);
```

```css
min-height: 12rem;
min-width: 12rem;

min-height: 3rem;
min-width: 2rem;

max-height: 20rem;
max-width: 20rem;

max-height: 5rem;
max-width: 4rem;
```

---variables|label:Square---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @size | unit | -- | Width &amp; height | ✓ |

---code|modifier:split---

```less
.square(50px);
```

```css
height: 50px;
width: 50px;
```

---variables|label:Ratio---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| embed | keyword | -- | Embed ||
| @ratio | unit | (16 / 9) | Ratio ||

---code|modifier:split---

```less
.ratio((4 / 3));
```

```css
display: block;
height: 0;
padding-top: 75%;
```

---code|modifier:split---

```less
.selector {
	.ratio(embed; (16 / 9));
}
```

```css
.selector {
	overflow: hidden;
	position: relative;
}
.selector:before {
	content: ' ';
	display: block;
	height: 0;
	padding-top: 56.25%;
}
```

---variables|label:Circle---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @diameter | unit | -- | Diameter | ✓ |
| @crop | boolean | false | Crop ||
| @display | block, inline | block | Display value ||

---code|modifier:split---

```less
.circle(10px; true);
```

```css
display: block;
height: 10px;
background-clip: border-box;
border-radius: 5px;
width: 10px;
overflow: hidden;
```