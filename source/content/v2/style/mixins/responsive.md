---
name: Responsive
---

---variables|label:Media Query---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @maxWidth | unit | -- | Breakpoint maximum width | ✔ |
| @rules | rules | -- | CSS rules | ✔ |

---code|modifier:split---

```less
.test-class {
	.media-query(500px; {
		.color(red);
	});
}
```

```css
@media (max-width: 500px) {
	.test-class {
		color: red;
	}
}
```