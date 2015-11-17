---
name: SVG
---

---variables|label:Fill---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @color | color | [@baseColor](/style/variables#base) = @darkestGray | Color value ||
| @value | unit | -- | Opacity ||

---code|modifier:split---

```less
.fill(#123);
```

```css
fill: #123;
```

---code|modifier:split---

```less
.fill(red; 50%);
```

```css
fill: rgba(155, 155, 155, .5);
```

---variables|label:Fill Dark/Light---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| light, dark | keyword | -- | Light or dark preset | ✓ |
| @opacity | unit | [@defaultOpacity](/style/variables#miscellaneous) = .2 | Fill opacity ||

---code|modifier:split---

```less
.fill(light);
```

```css
fill: rgba(255, 255, 255, .2);
```

---code|modifier:split---

```less
.fill(dark; 25%);
```

```css
fill: rgba(0, 0, 0, .25);
```

---variables|label:Stroke---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @color | color | [@baseColor](/style/variables#base) = @darkestGray | Color value ||
| @width | unit | -- | Stroke width ||

---code|modifier:split---

```less
.stroke(#123);
```

```css
stroke: #123;
```

---code|modifier:split---

```less
.stroke(red; 2px);
```

```css
stroke: red 2px;
```