---
name: Transforms
---

---table|label:Transform---

| Variable   | Type     | Default | Description     | Required |
| ---------- | -------- | ------- | --------------- | -------- |
| @arguments | keywords | --      | Transform rules | &#10003; |

---code---

```less
.transform(translateX(10px));
```

```less
-ms-transform: translateX(10px);
-webkit-transform: translateX(10px);
transform: translateX(10px);
```

---table|label:Rotate---

| Variable | Type    | Default | Description | Required |
| -------- | ------- | ------- | ----------- | -------- |
| @angle   | integer | 45      | Angle       |          |

---code---

```less
.rotate(30);
```

```less
-ms-transform: rotate(30deg);
-webkit-transform: rotate(30deg);
transform: rotate(30deg);
```

---table|label:Scale---

| Variable | Type    | Default | Description | Required |
| -------- | ------- | ------- | ----------- | -------- |
| @deg     | integer | 1       | Scale       |          |


---code---

```less
.scale(2);
```

```less
-ms-transform: scale(2);
-webkit-transform: scale(2);
transform: scale(2);
```

---table|label:Skew---

| Variable | Type    | Default | Description     | Required |
| -------- | ------- | ------- | --------------- | -------- |
| @x       | integer | 45      | Horizontal skew |          |
| @y       | integer | 0       | Vertical skew   |          |

---code---

```less
.skew(30, 15);
```

```less
-ms-transform: skew(30deg, 15deg);
-webkit-transform: skew(30deg, 15deg);
transform: skew(30deg, 15deg);
```

---table---

| Variable | Type    | Default | Description   | Required |
| -------- | ------- | ------- | ------------- | -------- |
| x, y     | keyword | --      | X or Y preset | &#10003; |
| @x, @y   | integer | 45      | Vertical skew |          |

---code---

```less
.skew(y; 15);
```

```less
-ms-transform: skewY(15deg);
-webkit-transform: skewY(15deg);
transform: skewY(15deg);
```

---table|label:Transform Origin---

| Variable | Type    | Default | Description       | Required |
| -------- | ------- | ------- | ----------------- | -------- |
| @x       | integer | --      | Horizontal origin | &#10003; |
| @y       | integer | 0       | Vertical origin   |          |

---code---

```less
.transform-origin(15%; 10%);
```

```less
-ms-transform: transform-origin(15%, 10%);
-webkit-transform: transform-origin(15%, 10%);
transform: transform-origin(15%, 10%);
```

---table|label:Translate---

| Variable | Type    | Default | Description   | Required |
| -------- | ------- | ------- | ------------- | -------- |
| @x       | integer | 0       | X translation |          |
| @y       | integer | 0       | Y translation |          |
| @z       | integer | --      | Z translation |          |

---code---

```less
.translate(10px; 15px; 20%);
```

```less
-webkit-transform: translate3d(10px, 15px, 20%);
transform: translate3d(10px, 15px, 20%);
```