---
name: Generator
---

You can disable all generator integration by setting enable to false. Add as many static generator config paths to the build array as needed.

```javascript
"generator": {
	"enable": true,
	"build": [
		"source/modules/guide/generate.json"
	]
}
```