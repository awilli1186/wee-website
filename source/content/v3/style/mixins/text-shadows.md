---
name: Text Shadows
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @value | string, keyword | '1px 1px 0 rgba(0, 0, 0, @{defaultOpacity})' | Text shadow rules ||

---code|modifier:split---

```less
.text-shadow('2px 1px 0 #000');
```

```css
text-shadow: 2px 1px 0 #000;
```

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| inner | keyword | -- | Inner preset ||
| @color | color | -- | Shadow color | ✔ |
| @x | value | 1px | Horizontal offset ||
| @y | value | 1px | Vertical offset ||
| @blur | value | 0 | Blur distance ||

---code|modifier:split---

```less
.text-shadow(blue; 4px; 3px; 2px);
```

```css
text-shadow: 4px 3px 2px #00f;
```

---code|modifier:split---

```less
.text-shadow(inner; blue);
```

```css
text-shadow: -1px -1px 0 #00f;
```

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| inner | keyword | -- | Inner preset ||
| light, dark | keyword | -- | Light or dark preset | ✔ |
| @value, @opacity | number | [@defaultOpacity](/style/variables#miscellaneous) = .2 | Opacity ||
| @x | unit | 1px | Horizontal offset ||
| @y | unit | 1px | Vertical offset ||
| @blur | unit | 0 | Blur ||

---code|modifier:split---

```less
.text-shadow(light; 0.4);
```

```css
text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.4);
```

---code|modifier:split---

```less
.text-shadow(inner; dark; 50%);
```

```css
text-shadow: -1px -1px 0 rgba(0, 0, 0, 0.5);
```