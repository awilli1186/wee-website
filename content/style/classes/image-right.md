---
name: Image Right
---

---code---

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

```less
float: right;
margin-top: 0.32em;
margin-bottom: 2rem;
margin-left: 2rem;
```

---note---

**Note:** The img-right class name can be overridden in variables.less.