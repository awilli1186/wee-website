---
name: Script
---

Wee comes with several standard JavaScript features such as asset loading, chaining, DOM manipulations, event binding and more. You can also compile and/or build in your own scripts.

---code|label:Core---

The core section allows you to enable or disable core features. For instance, if your project requires jQuery, you may choose not to include Wee's DOM functionality.

```javascript
"core": {
	"enable": true,
	"features": {
		"animate": true,
		"assets": true,
		"chain": true,
		"data": true,
		"dom": true,
		"events": true,
		"history": true,
		"routes": true,
		"screen": true,
		"touch": true,
		"view": true
	}
}
```

---note---

**Note:** Setting the primary enable value to false disables all core features.

---code|label:Build---

This works the same as the CSS section. You can build any script into the primary compiled file.

```javascript
"build": [
	"path/to/one.js",
	"path/to/two.js"
]
```

---code|label:Compile---

This works the same as the CSS section. If you have JavaScript files that you would like to compile and minify, but not include in your primary JavaScript output, this is where you can specify them.

```javascript
"compile": {
	"ie9.min.js": [
		"polyfill/wee.placeholder.js",
		"polyfill/wee.slice.js"
	]
}
```

---code|label:Validate---

The validation section controls which settings are used for [JSCS](http://jscs.info) and [JSHint](http://jshint.com) code style and quality tools. Set either to false to disable them otherwise you can update the path to point to any config file or modify the default files provided in the source directory. Setting watch to false disables continuous validation and only allows [on-demand validation](/build/commands#validate).

```javascript
"validate": {
	"watch": true,
	"jscs": "source/.jscs.json",
	"jshint": "source/.jshintrc"
}
```

---code|label:Source Maps---

Source maps allow modern browsers to map compiled and minified code to original source scripts. This is useful when tuning and debugging.

```javascript
"sourceMaps": true
```