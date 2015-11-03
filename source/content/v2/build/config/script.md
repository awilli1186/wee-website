---
name: Script
---

Wee comes with several standard JavaScript features such as asset loading, chaining, DOM manipulations, event binding and more. You can also compile and/or build in your own scripts.

---code|label:Core---

The core section allows you to enable or disable core JavaScript features. For instance, if your project requires jQuery, you may choose not to include Wee's DOM and chaining.

```javascript
"core": {
  	"enable": true,
  	"features": {
  		"assets": true,
  		"chain": true,
  		"data": true,
  		"dom": true,
  		"events": true,
  		"routes": true,
  		"screen": true,
  		"view": true
  	}
}
```

---note---

**Note:** Setting the primary enable value to false disables all script features.

---code|label:Build---

This works the same as the CSS section. You can build in any script right into Wee's primary script file.

```javascript
"build": [
	"path/files/one.js",
	"path/files/two.js"
]
```

---code|label:Compile---

This works the same as the CSS section. If you have Javascript files that you would like to compile and minify, but not include in your primary Javascript output, this is where you can specify them.

```javascript
"compile": {
	"ie8.min.js": [
		"polyfill/es5-shim.js",
		"polyfill/html5shiv.js",
		"polyfill/sizzle.js",
		"polyfill/wee.svg.js",
		"custom/ie8.js"
	],
	"ie9.min.js": [
		"polyfill/wee.slice.js",
		"polyfill/wee.placeholder.js"
	],
	"guide.min.js": "custom/guide.js"
}
```

---code|label:Validate---

The validation section controls which settings are used for [JSCS](http://jscs.info/) and [JSHint](http://jshint.com/) code style and quality tools. Set either to false to disable the tool otherwise you can update the path to point to any config file or modify the default files provided in the project root. Setting watch to false disables continuous validation and only validates [on demand](/build/validation).

```javascript
"validate": {
	"watch": true,
	"jscs": ".jscs.json",
	"jshint": ".jshintrc"
}
```

---code|label:Source Maps---

Source maps allow supporting browsers to map compiled and minified code to original source scripts. This is useful for debugging and locating errors.

```javascript
"sourceMaps": true
```