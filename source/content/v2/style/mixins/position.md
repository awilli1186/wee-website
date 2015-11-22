---
name: Position
---

---variables|label:Top, Right, Bottom &amp; Left---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @value | unit | 0 | Amount ||

---code|modifier:split---

```less
.top(4);
```

```css
top: 4rem;
```

---code|modifier:split---

```less
.right(2);
```

```css
right: 2rem;
```

---variables|label:Position---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @value | keyword | -- | Positioning | ✔ |
| @top | unit | -- | Top ||
| @right | unit | -- | Right ||
| @bottom | unit | -- | Bottom ||
| @left | unit | -- | Left ||

---code|modifier:split---

```less
.position(fixed; 4px; 3; 2%; 1rem);
```

```css
position: fixed;
top: 4px;
right: 3rem;
bottom: 2%;
left: 1rem;
```

---variables|label:Absolute &amp; Fixed---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @top | unit | -- | Top position ||
| @right | unit | -- | Right position ||
| @bottom | unit | -- | Bottom position ||
| @left | unit | -- | Left position ||

---code|modifier:split---

```less
.absolute();
```

```css
position: absolute;
```

---code|modifier:split---

```less
.absolute(3; 2);
```

```css
position: absolute;
top: 3rem;
right: 2rem;
```

---code|modifier:split---

```less
.fixed(2rem);
```

```css
position: fixed;
top: 2rem;
```

---code|modifier:split|label:Relative---

```less
.relative();
```

```css
position: relative;
```

---code|modifier:split|label:Static---

```less
.static();
```

```css
position: static;
```

---variables|label:Z-Index---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @index | integer | 1 | Z-index ||

---code|modifier:split---

```less
.z-index(4);
```

```css
z-index: 4;
```