---
name: Shapes
---

---variables|label:Caret---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| up, down, right, left | keyword | -- | Direction | ✓ |
| @color | color | [@darkGray](/style/variables#grayscale) = lighten(#000, 45%) | Color ||
| @size | unit | 5px | Size ||
| @horizontalSize, @verticalSize | unit | @size | Horizontal or vertical size ||

---code|modifier:split---

```less
.caret(up; red; 10px);
```

```css
content: ' ';
height: 0;
width: 0;
border-left: 10px solid transparent;
border-right: 10px solid transparent;
border-bottom: 10px solid #ff0000;
```

---code|modifier:split---

```less
.caret(left; blue);
```

```css
content: ' ';
height: 0;
width: 0;
border-bottom: 5px solid transparent;
border-top: 5px solid transparent;
border-right: 5px solid #0000ff;
```