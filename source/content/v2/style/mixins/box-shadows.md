---
name: Box Shadows
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @value | string, keyword | '1px 1px 0 0 rgba(0, 0, 0, @{defaultOpacity})' | Box-shadow rules ||

---code|modifier:split---

```less
.shadow('3px 2px 1px 0 #000');
```

```css
box-shadow: 3px 2px 1px 0 #000;
```

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | :------: |
| inner | keyword | -- | Inner preset ||
| @color | color | -- | Shadow color | ✔ |
| @x | value | 1px | Horizontal offset ||
| @y | value | 1px | Vertical offset ||
| @blur | value | 0 | Blur distance ||
| @spread | value | 0 | Shadow size ||

---code|modifier:split---

```less
.shadow(blue);
```

```css
box-shadow: 1px 1px 0 0 #00f;
```

---code|modifier:split---

```less
.shadow(rgba(0, 0, 0, 0.6); 4px; 3px; 2px; 2px);
```

```css
box-shadow: 4px 3px 2px 2px rgba(0, 0, 0, 0.6);
```

---code|modifier:split---

```less
.shadow(inner; blue);
```

```css
box-shadow: inset 1px 1px 0 0 #00f;
```

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| light, dark | keyword | -- | Light or dark preset | ✔ |
| @value | percentage | @defaultOpacity | Opacity ||
| @x | unit | 1px | Horizontal offset ||
| @y | unit | 1px | Vertical offset ||
| @blur | unit | 0 | Blur ||
| @spread | unit | 0 | Spread ||

---code|modifier:split---

```less
.shadow(light; 40%);
```

```css
box-shadow: 1px 1px 0 0 rgba(255, 255, 255, 0.4);
```

---code|modifier:split---

```less
.shadow(dark; 50%);
```

```css
box-shadow: 1px 1px 0 0 rgba(0, 0, 0, 0.5);
```

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| inner | keyword | -- | Inner preset | ✔ |
| light, dark | keyword | -- | Light or dark preset | ✔ |
| @opacity | percentage | @defaultOpacity | Opacity ||
| @x | unit | 1px | Horizontal offset ||
| @y | unit | 1px | Vertical offset ||
| @blur | unit | 0 | Blur ||
| @spread | unit | 0 | Spread ||

---code|modifier:split---

```less
.shadow(inner; light; 40%);
```

```css
box-shadow: inset 1px 1px 0 0 rgba(255, 255, 255, 0.4);
```

---code|modifier:split---

```less
.shadow(inner; dark; 50%);
```

```css
box-shadow: inset 1px 1px 0 0 rgba(0, 0, 0, 0.5);
```