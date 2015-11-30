---
name: Config
---

The config object allows you to enable or disable core generator features.

```javascript
"config": {
	"watch": true,
	"minify": true,
	"enhanceTypography": true,
	"removeIndex": true,
	"removeTrailingSlashes": true,
	"paths": {
		"content": "content",
		"helpers": "helpers",
		"partials": "partials",
		"target": "../../../public/guide/",
		"templates": "templates"
	}
}
```

---code|label:Watching---

Setting this to true will set the Wee build process to watch for changes.

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

Here you can set the default root paths for content, helpers, partials, and templates. By default they are at the same level as the site config file. You also set the target path which is where the output section targets are relative to.

```javascript
"paths": {
	"content": "content",
	"helpers": "helpers",
	"partials": "partials",
	"target": "../../../public/guide/",
	"templates": "templates"
}
```