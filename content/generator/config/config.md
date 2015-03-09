---
name: Config
---

The config object allows you to enable or disable core features of the generator.

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

---code|label:Watching---

Setting this to true will make toggle the Wee Grunt process to watch for changes.

```javascript
"watch": true
```

---code|label:Minification---

When true the output HTML with be minified.

```javascript
"minify": true
```

---code|label:Enhance Typography---

Smart quotes and other typographic features can be enabled here.

```javascript
"enhanceTypography": true
```

---code|label:Indexes---

This will remove index.html from any path references. This should be used in conjunction with web server rewrite rules.

```javascript
"removeIndex": true
```

---code|label:Trailing Slashes---

Similar to removeIndex, this will remove trailing slashes from any output paths.

```javascript
"removeTrailingSlashes": true
```

---code|label:Paths---

Here you can set the paths for partials, templates, and extensions. By default they are at the same level as the site config file.

```javascript
"paths": {
	"partials": "partials",
	"templates": "templates",
	"extensions": "extensions"
}
```