---
name: Image Left
heading: Perfect for alignment of images in content blocks
---

---code---

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

```less
float: left;
margin-top: 0.32em;
margin-right: 2rem;
margin-bottom: 2rem;
```

---note---

**Note:** The img-left class name can be overridden in variables.less.