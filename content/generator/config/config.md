---
name: Config
---

This allows you to enable or disable core features of the static site generator.

```javascript
"config": {
	"watch": true,
	"minify": true,
	"enhanceTypography": true,
	"removeIndex": true,
	"removeTrailingSlashes": true,
	"paths": {
		"partials": "partials",
		"templates": "templates",
		"extensions": "extensions"
	}
}
```

---code|label:Watch---

Setting this to true will make grunt watch for changes.

```javascript
"watch": true
```

---code|label:Minify---

This will minify the rendered output if set to true.

```javascript
"minify": true
```

---code|label:Enhance Typography---

Smart quotes and other typographic features can be enabled here.

```javascript
"enhanceTypography": true
```

---code|label:Remove Index---

This will remove index.html from any injected links.

```javascript
"removeIndex": true
```

---code|label:Remove Trailing Slashes---

Similar to removeIndex, this will remove trailing slashes from any injected links.

```javascript
"removeTrailingSlashes": true
```

---code|label:Paths---

Here you can set the paths for partials, templates, and extensions.

```javascript
"paths": {
	"partials": "partials",
	"templates": "templates",
	"extensions": "extensions"
}
```