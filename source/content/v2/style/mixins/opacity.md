---
name: Opacity
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @value | unit | -- | Opacity | ✔ |

---code|modifier:split---

```less
.opacity(50%);
```

```css
filter: alpha(opacity=50);
opacity: 0.5;
```

---code|modifier:split|label:Transparent---

```less
.transparent();
```

```css
filter: alpha(opacity=0);
opacity: 0;
```

---code|modifier:split|label:Opaque---

```less
.opaque();
```

```css
filter: alpha(opacity=100);
opacity: 1;
```