---
name: Animation
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @arguments | value | -- | Animation rules | ✔ |

---code---

```less
.animation(name 4s linear 0s 1);
```

```css
-webkit-animation: name 4s linear 0s 1;
animation: name 4s linear 0s 1;
```

---variables|label:Keyframes---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @name | value | -- | Animation name | ✔ |
| @start | value | -- | Starting value | ✔ |
| @end | value | -- | Ending value | ✔ |

---code---

```less
.keyframes(fade-in, {
	.transparent();
}, {
	.opaque();
});
```

```css
@-webkit-keyframes fade-in {
	0% {
		opacity: 0:
	}
	100% {
		opacity: 1:
	}
}
@keyframes fade-in {
	0% {
		opacity: 0:
	}
	100% {
		opacity: 1:
	}
}
```