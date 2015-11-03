---
name: Container
heading: Create a centered container based on @minWidth, @maxWidth, and @padContainer
---

---code---

```less
.container {
	.content-box();
	.max-width(@maxWidth);
	.min-width(@minWidth);
	.check () when (@padContainer = true) {
		.padded();
	}
	.check();
}
```

---code|modifier:split---

```less
.container();
```

```less
display: block;
margin-left: auto;
margin-right: auto;
-moz-box-sizing: content-box;
-webkit-box-sizing: content-box;
box-sizing: content-box;
max-width: 1280px;
min-width: 260px;
padding-left: 6%;
padding-right: 6%;
```