---
name: Container
heading: Create a centered container based on @minWidth, @minWidth, and @padContainer
---

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