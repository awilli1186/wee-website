---
name: Transforms
---

---variables|label:Transform---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @arguments | keywords | -- | Transform rules | ✔ |

---code|modifier:split---

```less
.transform(translateX(10px));
```

```css
-ms-transform: translateX(10px);
-webkit-transform: translateX(10px);
transform: translateX(10px);
```

---variables|label:Rotate---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @angle | integer | 45 | Angle ||

---code|modifier:split---

```less
.rotate(30);
```

```css
-ms-transform: rotate(30deg);
-webkit-transform: rotate(30deg);
transform: rotate(30deg);
```

---variables|label:Scale---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @value, x, y | integer, keyword | 1 | Scale or dimension ||
| @value | integer | 1 | Scale ||

---code|modifier:split---

```less
.scale(x; 2);
```

```css
-ms-transform: scaleX(2);
-webkit-transform: scaleX(2);
transform: scaleX(2);
```

---variables|label:Skew---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @x | integer | 45 | Horizontal skew ||
| @y | integer | 0 | Vertical skew ||

---code|modifier:split---

```less
.skew(30, 15);
```

```css
-ms-transform: skew(30deg, 15deg);
-webkit-transform: skew(30deg, 15deg);
transform: skew(30deg, 15deg);
```

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| x, y | keyword | -- | X or Y preset | ✔ |
| @x, @y | integer | 45 | Vertical skew ||

---code|modifier:split---

```less
.skew(y; 15);
```

```css
-ms-transform: skewY(15deg);
-webkit-transform: skewY(15deg);
transform: skewY(15deg);
```

---variables|label:Transform Origin---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @x | integer | -- | Horizontal origin | ✔ |
| @y | integer | 0 | Vertical origin ||

---code|modifier:split---

```less
.transform-origin(15%; 10%);
```

```css
-ms-transform: transform-origin(15%, 10%);
-webkit-transform: transform-origin(15%, 10%);
transform: transform-origin(15%, 10%);
```

---variables|label:Translate---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @x | integer | 0 | X translation ||
| @y | integer | 0 | Y translation ||
| @z | integer | -- | Z translation ||

---code|modifier:split---

```less
.translate(10px; 15px; 20%);
```

```css
-webkit-transform: translate3d(10px, 15px, 20%);
transform: translate3d(10px, 15px, 20%);
```