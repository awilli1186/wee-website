---
name: Blocks
---

---variables|label:Centered Block---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @maxWidth | unit | -- | Max width ||
| @margin | unit | -- | Bottom margin ||

---code|modifier:split---

```less
.centered-block();
```

```css
display: block;
margin-left: auto;
margin-right: auto;
```

---code|modifier:split---

```less
.centered-block(5);
```

```css
display: block;
margin-left: auto;
margin-right: auto;
max-width: 5rem;
```

---code|modifier:split---

```less
.centered-block(50%; 2);
```

```css
display: block;
margin-left: auto;
margin-right: auto;
max-width: 50%;
margin-bottom: 2rem;
```