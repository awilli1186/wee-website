---
name: Padding
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @value | unit | -- | Padding value | ✓ |

---code|modifier:split---

```less
.padding(5);
```

```css
padding: 5rem;
```

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| top, right, bottom, left | keyword | -- | Side presets | ✓ |
| @value | unit | -- | Padding value | ✓ |

---code|modifier:split---

```less
.padding(left; 2);
```

```css
padding-left: 2rem;
```

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| horizontal | keyword | -- | Sets padding to @bumperPadding | ✓ |

---code|modifier:split---

```less
.padding(horizontal);
```

```css
padding-left: 6%;
padding-right: 6%;
```

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| horizontal, vertical | keyword | -- | Horizontal or vertical preset | ✓ |
| @value | unit | -- | Padding value | ✓ |

---code|modifier:split---

```less
.padding(vertical; 2);
```

```css
padding-top: 2rem;
padding-bottom: 2rem;
```

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| horizontal, vertical | keyword | -- | Horizontal or vertical preset | ✓ |
| @left, @top | unit | -- | Left or top padding value | ✓ |
| @right, @bottom | unit |-- | Right or bottom padding value | ✓ |

---code|modifier:split---

```less
.padding(horizontal; 2; 3);
```

```css
padding-left: 2rem;
padding-right: 3rem;
```

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @vertical | unit | -- | Vertical padding | ✓ |
| @horizontal | unit | -- | Horizontal padding | ✓ |

---code|modifier:split---

```less
.padding(2; 3);
```

```css
padding-top: 2rem;
padding-right: 3rem;
padding-bottom: 2rem;
padding-left: 3rem;
```

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @top | unit | -- | Top padding | ✓ |
| @right | unit | -- | Right padding | ✓ |
| @bottom | unit | -- | Bottom padding | ✓ |
| @left | unit | -- | Left padding | ✓ |

---code|modifier:split---

```less
.padding(2; 3; 3; 4);
```

```css
padding-top: 2rem;
padding-right: 3rem;
padding-bottom: 3rem;
padding-left: 4rem;
```

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @padding | unit | @bumperPadding | Padding value ||

---code|modifier:split|label:Padded---

```less
.padded(2%);
```

```css
padding-left: 2%;
padding-right: 2%;
```