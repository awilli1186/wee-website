---
name: Margin
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @value | unit | -- | Margin value | ✔ |

---code|modifier:split---

```less
.margin(5);
```

```css
margin: 5rem;
```

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| top, right, bottom, left | keyword | -- | Side presets | ✔ |
| @value | unit | -- | Margin value ||

---code|modifier:split---

```less
.margin(left; 2);
```

```css
margin-left: 2rem;
```

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| horizontal, vertical | keyword | -- | Horizontal or vertical preset | ✔ |
| @value | unit | -- | Margin value ||


---code|modifier:split---

```less
.margin(vertical; 2);
```

```css
margin-top: 2rem;
margin-bottom: 2rem;
```

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| horizontal, vertical | keyword | -- | Horizontal or vertical preset | ✔ |
| @left, @top | unit | -- | Margin value ||
| @right, @bottom | unit | -- | Margin value ||

---code|modifier:split---

```less
.margin(horizontal; 2; 3);
```

```css
margin-left: 2rem;
margin-right: 3rem;
```

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @y | unit | -- | Vertical margins ||
| @x | unit | -- | Horizontal margins ||

---code|modifier:split---

```less
.margin(2; 3);
```

```css
margin-top: 2rem;
margin-right: 3rem;
margin-bottom: 2rem;
margin-left: 3rem;
```

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @top | unit | -- | Top margin ||
| @right | unit | -- | Right margin ||
| @bottom | unit | -- | Bottom margin ||
| @left | unit | -- | Left margin ||

---code|modifier:split---

```less
.margin(2; 3; 3; 4);
```

```css
margin-top: 2rem;
margin-right: 3rem;
margin-bottom: 3rem;
margin-left: 4rem;
```