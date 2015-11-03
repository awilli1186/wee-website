---
name: Font Selection
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @family | font | -- | Font family rules | ✓ |
| @size | unit | -- | Font size ||
| @weight | unit | -- | Font weight ||
| @lineHeight | unit | -- | Line height ||
| @style | keyword | -- | Font style ||

---code|modifier:split---

```less
.font(Helvetica; 2; 100; 2; italic);
```

```css
font-family: Helvetica;
font-size: 2rem;
font-weight: 100;
line-height: 2rem;
font-style: italic;
```