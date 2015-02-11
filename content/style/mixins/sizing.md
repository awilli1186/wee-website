---
name: Sizing
---

---variables|label:Width &amp; Height---

| Variable              | Type | Default | Description     | Required |
| --------------------- | ---- | ------- | --------------- | -------- |
| @value                | unit | --      | Width or Height | ✓        |
| @maxWidth, @maxHeight | unit | --      | Maximum         |          |

---code---

```less
.width(4; 5);
.height(3; 40%);
```

```less
width: 4rem;
max-width: 5rem;
height: 3rem;
max-height: 40%;
```

---variables---

| Variable | Type | Default | Description        | Required |
| -------- | ---- | ------- | ------------------ | -------- |
| @value   | unit | --      | Minimum or maximum | ✓        |

---code---

```less
.max-width(4rem);
.min-width(2rem);
```

```less
max-width: 4rem;
min-width: 2rem;
```

---code---

```less
.max-height(5rem);
.min-height(3rem);
```

```less
max-height: 5rem;
min-height: 3rem;
```

---variables|label:Size---

| Variable   | Type | Default | Description | Required |
| ---------- | ---- | ------- | ----------- | -------- |
| @width     | unit | --      | Width       | ✓ |
| @height    | unit | --      | Height      | ✓ |

---code---

```less
.size(100px; 6);
```

```less
height: 6rem;
width: 100px;
```

---code---

```less
.min-size(2; 3);
.max-size(4; 5);
```

```less
min-height: 3rem;
min-width: 2rem;
max-height: 5rem;
max-width: 4rem;
```

---variables|label:Square---

| Variable | Type | Default | Description    | Required |
| -------- | ---- | ------- | -------------- | -------- |
| @size    | unit | --      | Width &amp; height | ✓        |

---code---

```less
.square(50px);
```

```less
height: 50px;
width: 50px;
```

---variables|label:Ratio---

| Variable | Type    | Default  | Description | Required |
| -------- | ------- | -------- | ----------- | -------- |
| embed    | keyword | --       | Embed       |          |
| @ratio   | unit    | (16 / 9) | Ratio       |          |

---code---

```less
.ratio((4 / 3));
```

```less
display: block;
height: 0;
padding-top: 75%;
```

---code---

```less
div {
	.ratio(embed; (16 / 9));
}
```

```less
div {
	overflow: hidden;
	position: relative;
}
div:before {
	content: ' ';
	display: block;
	height: 0;
	padding-top: 56.25%;
}
```

---variables|label:Circle---

| Variable  | Type    | Default | Description | Required |
| --------- | ------- | ------- | ----------- | -------- |
| @diameter | unit    | --      | Diameter    | ✓        |
| @crop     | boolean | false   | Crop        |          |

---code---

```less
.circle(10px; true);
```

```less
display: block;
height: 10px;
background-clip: border-box;
border-radius: 5px;
width: 10px;
overflow: hidden;
```