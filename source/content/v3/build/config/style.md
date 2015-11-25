---
name: Style
---

The core block allows disabling styling features as well as setting breakpoint values. By setting any key to false that feature or breakpoint is suppressed.

```javascript
"core": {
	"namespace": false,
	"features": {
		"buttons": true,
		"code": true,
		"forms": true,
		"print": true,
		"tables": true
	},
	"responsive": {
		"enable": true,
		"offset": 25,
		"breakpoints": {
			"mobileLandscape": 480,
			"tabletPortrait": 768,
			"desktopSmall": 1024,
			"desktopMedium": 1280,
			"desktopLarge": 1440
		}
	}
}
```

---note---

**Note:** The offset value is used to decrement breakpoint values by a set number of pixels which is useful when testing media queries widths in desktop browsers.

---code|label:Build---

Wee outputs one primary CSS file. The build array specifies additional CSS or Less files that you want included.

```javascript
"build": [
	"path/files/one.css",
	"path/files/two.less"
]
```

---note---

**Note:**  Paths are relative to the Wee CSS source directory unless prefixed with `./` making them relative to `wee.js`.

---code|label:Compile---

If you have CSS or Less files that you would like to compile, but not include in your primary stylesheet (to serve specific styling to certain pages), this is where you can define them.

```javascript
"compile": {
	"array.css": [
		"path/files/one.css",
		"path/files/two.less"
	],
	"ie9.min.css": "/source/css/custom/ie9.less",
	"globbing.css": "path/files/*.less"
}
```

---code---

You can use any globbing conventions (such as wildcards and exclusions).

```javascript
"file.css": [
	"*",
	"**/*",
	"*.less",
	"*.{css,less}",
	"**/*.css",
	"!**/*.less"
]
```