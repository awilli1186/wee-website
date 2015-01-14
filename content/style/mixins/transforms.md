---
name: Transforms
---

---code---

```less
.transform(translateX(10px));
```

```less
-ms-transform: translateX(10px);
-webkit-transform: translateX(10px);
transform: translateX(10px);
```

---code---

```less
.rotate(30);
```

```less
-ms-transform: rotate(30deg);
-webkit-transform: rotate(30deg);
transform: rotate(30deg);
```

---code---

```less
.scale(2);
```

```less
-ms-transform: scale(2);
-webkit-transform: scale(2);
transform: scale(2);
```

---code---

```less
.skew(30, 15);
```

```less
-ms-transform: skew(30deg, 15deg);
-webkit-transform: skew(30deg, 15deg);
transform: skew(30deg, 15deg);
```

---code---

```less
.skew(y; 15);
```

```less
-ms-transform: skewY(15deg);
-webkit-transform: skewY(15deg);
transform: skewY(15deg);
```

---code---

```less
.transform-origin(15%; 10%);
```

```less
-ms-transform: transform-origin(15%, 10%);
-webkit-transform: transform-origin(15%, 10%);
transform: transform-origin(15%, 10%);
```

---code---

```less
.translate(10px; 15px; 20%);
```

```less
-webkit-transform: translate3d(10px, 15px, 20%);
transform: translate3d(10px, 15px, 20%);
```