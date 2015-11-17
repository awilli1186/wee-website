---
name: Font Size
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @value | unit | [@baseFontSize](/style/variables#base) = 1.6 | Font size ||

---code|modifier:split---

```less
.font-size(2);
```

```css
font-size: 2rem;
```

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | :------: |
| @value | unit | -- | Font size rules | ✓ |
| @lineHeight | unit | -- | Line height rules | ✓ |

---code|modifier:split---

```less
.font-size(3; 1.6);
```

```css
font-size: 3rem;
line-height: 1.6rem;
```