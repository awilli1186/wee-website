---
name: Image Align
heading: Perfect for alignment of images in content blocks
---

---code|label:Left---

```less
.img-left {
	float: left;
	.margin(.32em; @imageMarginSide; @imageMarginBottom; false);
}
```

---code|modifier:split---

```less
.img-left();
```

```css
float: left;
margin-top: 0.32em;
margin-right: 2rem;
margin-bottom: 2rem;
```

---code|label:Right---

```less
.img-right {
	float: right;
	.margin(.32em; false; @imageMarginBottom; @imageMarginSide);
}
```

---code|modifier:split---

```less
.img-right();
```

```css
float: right;
margin-top: 0.32em;
margin-bottom: 2rem;
margin-left: 2rem;
```

---note---

**Note:** The "img-left" and "img-right" class names can be overridden in variables.less.