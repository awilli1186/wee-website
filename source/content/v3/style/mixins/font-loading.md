---
name: Font Loading
---

---variables|label:Load Font---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @name | string | -- | Font family rules | ✔ |
| @file | file | @name | Font file ||
| @weight | integer, keyword | normal | Font weight ||
| @style | keyword | normal | Font style ||

---code|modifier:split---

```less
.load-font(icons);
```

```css
@font-face {
	font-family: Example;
		src: url('../fonts/icons.eot');
		src: url('../fonts/icons.eot?#iefix') format('embedded-opentype'),
			url('../fonts/icons.woff2') format('woff2'),
			 url('../fonts/icons.woff') format('woff'),
			 url('../fonts/icons.ttf') format('truetype');
		font-style: normal;
		font-weight: normal;

	// Window Chrome fix
	@media screen and (-webkit-min-device-pixel-ratio: 0) {
		@font-face {
			font-family: ~'@{name}';
			src: url('../fonts/icons.svg#icons') format('svg');
		}
	}
}
```