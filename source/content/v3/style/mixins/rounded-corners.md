---
name: Rounded Corners
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @value | unit | [@defaultRadius](/style/variables#miscellaneous) = 3px | Size of radius ||

---code|modifier:split---

```less
.rounded(3);
```

```css
background-clip: border-box;
border-radius: 3rem;
```

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| top, right, bottom, left | keyword | -- | Side presets | ✔ |
| @value | unit | [@defaultRadius](/style/variables#miscellaneous) = 3px | Radius ||

---code|modifier:split---

```less
.rounded(top);
```

```css
background-clip: border-box;
border-top-left-radius: 3px;
border-top-right-radius: 3px;
```

---code|modifier:split---

```less
.rounded(right; 5);
```

```css
background-clip: border-box;
border-top-right-radius: 5rem;
border-bottom-right-radius: 5rem;

```

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| top, bottom | keyword | -- | Top or bottom preset | ✔ |
| left, right | keyword | -- | Left or right  preset | ✔ |
| @value | unit | [@defaultRadius](/style/variables#miscellaneous) = 3px | Radius ||

---code|modifier:split---

```less
.rounded(bottom; left);
```

```css
background-clip: border-box;
border-bottom-left-radius: 3px;
```

---code|modifier:split---

```less
.rounded(top; right; 4);
```

```css
background-clip: border-box;
border-top-right-radius: 4rem;
```

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @top | unit | -- | Top radius | ✔ |
| @right | unit | -- | Right radius | ✔ |
| @bottom | unit | -- | Bottom radius | ✔ |
| @left | unit | -- | Left radius | ✔ |

---code|modifier:split---

```less
.rounded(2px; 3rem; 4px; 5px);
```

```css
background-clip: border-box;
border-top-left-radius: 2px;
border-top-right-radius: 3rem;
border-bottom-right-radius: 4px;
border-bottom-left-radius: 5px;
```