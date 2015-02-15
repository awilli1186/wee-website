---
name: Shapes
---

---variables|label:Caret---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| up, down, right, left | keyword | -- | Direction | ✓ |
| @color | color | @darkGray | Color ||
| @size | unit | 5px | Size ||
| @horizontalSize, @verticalSize | unit | @size | Horizontal or vertical size ||

---code---

```less
.caret(up; red; 10px);
```

```less
content: ' ';
height: 0;
width: 0;
border-left: 10px solid transparent;
border-right: 10px solid transparent;
border-bottom: 10px solid #ff0000;
```

---code---

```less
.caret(left; blue);
```

```less
content: ' ';
height: 0;
width: 0;
border-bottom: 5px solid transparent;
border-top: 5px solid transparent;
border-right: 5px solid #0000ff;
```