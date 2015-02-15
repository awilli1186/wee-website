---
name: Font Loading
---

---variables|label:Load Font---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| @name | string | -- | Font family rules | ✓ |
| @file | file | @name | Font file ||
| @weight | integer, keyword | normal | Font weight ||
| @style | keyword | normal | Font style ||

---code---

```less
.load-font(Example);
```

```less
@font-face {
	font-family: Example;
	src: url('../fonts/Example.eot');
	src: url('../fonts/Example.eot?#iefix') format('embedded-opentype'),
	     url('../fonts/Example.woff') format('woff'),
		 url('../fonts/Example.ttf') format('truetype'),
		 url('../fonts/Example.svg#Example') format('svg');
	font-style: normal;
	font-weight: normal;
}
```