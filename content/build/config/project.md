---
name: Project
heading: JSON-based configuration for your project
---

The project file tells Grunt about your project. What is the URL of your local dev server? What items do you want to compile? What items do you want to build?

Let's walk through the available settings.

### Name & Description

These values are for your internal reference only.

```javascript
"name": "My project",
"description": "My project is really cool"
```

### Paths

In order to accommodate various server and directory configurations, Grunt needs to know your directory structure. So you'll want to set the paths based on your environment. Both paths here are relative to the Gruntfile.

```javascript
"paths": {
	"root": "public",
	"assets": "assets"
}
```

The "root" path is your html directory which in your particular environment could be "www", "public", "public_html", or something else.

The "assets" path is the directory within "root" where Wee assets live.

### Style

This is where you tell grunt about additional files you would like to include. There are two options here, "build" and "compile".

```javascript
"style": {
	"build": [

	],
	"compile": {

	}
}
```

### Core

Part of the Style section of your project file as noted directly above, this allows you to enable or disable core features of Wee Style.

```javascript
"core": {
	"buttons": true,
	"code": true,
	"forms": true,
	"print": true,
	"tables": true,
	"responsive": {
		"enable": true,
		"offset": 25,
		"breakpoints": {
			"mobileLandscape": false,
			"tabletPortrait": 768,
			"desktopSmall": 1024,
			"desktopMedium": 1280,
			"desktopLarge": 1440
		}
	}
}
```

### Build

Part of the "style" configuration as noted above. Wee Grunt outputs one primary CSS file. Build specifies an array of CSS or Less files that you want built into your primary style. The file paths should be considered relative to the Wee CSS directory (in "assets") unless starting with "./".

```javascript
"build": [
	"directory/third-party-style.css",
	"directory/other-third-party.less"
]
```

### Compile

Part of the "style" configuration as noted above. If you have stylesheets or LESS files that you would like to compile, but not include in your primary stylesheet (say you only need some specific styles on one specific page of your site), this is where you can specify them.

```javascript
"compile": {
	"mything.css": [
		"mydirectory/myfile.less",
		"myfile.css"
	],
	"mything.css": "path/to/my/files/*.less"
}
```

As in the example above, in addition to having an array of files that compile into one file, you can also just compile a Less file into a minified CSS file. Also note that you can use any grunt file path conventions (such as wildcards and exclusions).

```javascript
"file.css": [
	"*",
	"**/*",
	"*.less",
	"*.{less,css}",
	"**/*.css",
	"!**/*.less"
]
```

### Legacy

Wee has a few built-in legacy handling features for IE8 that you may or may not wish to take advantage of.

```javascript
"legacy": {
	"enable": true,
	"watch": false,
	"breakpoint": 4,
	"rootSize": "62.5%",
	"dest": "ie8.min.css",
	"build": [
		"custom/ie8.less"
	]
}
```

### Script

Wee comes with several "out-of-the-box" javascript features such as asset loading, chaining, DOM manipulations, event binding and more. Plus you can compile and/or build in your own scripts.

```javascript
"script": {
	"core": {
		"enable": true,
		"features": {
			"assets": true,
			"chain": true,
			"data": true,
			"dom": true,
			"events": true,
			"routes": true,
			"screen": true
		}
	},
	"build": [

	],
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
		]
	},
	"sourceMaps": true
}
```

### Core

Part of the Script section of your project file as noted directly above, this allows you to enable or disable core features of Wee Javascript. Use the master "enable: true or false" setting to disable all Wee core JS features. Otherwise you can control specific aspects below. For instance, if your project requires jQuery, there's no need to have Wee's dom and chaining features enabled since that would be duplicating jQuery functionality and therefore just making code bloat.

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
		"screen": true
	}
}
```

### Build

This works the same as the CSS section. You can build in any script right into Wee's primary JS file. The file paths should be considered relative to the Wee JS directory (in "assets") unless starting with "./".

```javascript
"build": [
	"lib/vendor/third-party.js",
	"lib/vendor/other-third-party.js"
]
```

### Compile

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
	]
}
```

### SourceMaps

Source maps allow browsers to show you where a particular part of Javascript is coming from in the source files Wee compiles from even though it is compiled and minified into one file. This is very useful for debugging and locating the source of errors.
			"sourceMaps": true

### Server

Grunt tasks related to serving files ("grunt static", "grunt local") have some configuration options which you can set here.

```javascript
"server": {
	"ghostMode": true,
	"host": "auto",
	"port": 3000,
	"reload": {
		"enable": true,
		"watch": {
			"root": true,
			"paths": [

			],
			"extensions": [
				"html"
			]
		}
		},
		"tasks": {
			"local": {
				"proxy": "wee.dev"
				},
				"static": {
					"https": false
				}
			}
		}
```

### GhostMode

When grunt is running and serving your site through the proxy, you can chose to have it ghost all actions between browsers. That means if you have a browser window open to your proxy URL on perhaps a mobile device on the same network, and your local development device, when you scroll or click or take an action on one browser, it will be ghosted on the other.

```javascript
"ghostMode": true
```

### Port

If for some reason you are having a port conflict, you can change the port here.

```javascript
"port": 3000
```

### Reload

This allows you, of course, to enable or disable reloading whenever CSS, JS, or static files change, but it also allows you to specify only certain paths and extensions to watch.

```javascript
"reload": {
	"enable": true,
	"watch": {
		"root": true,
		"paths": [

		],
		"extensions": [
			"html"
		]
	}
}
```

### Tasks

With the "grunt local" task, Wee needs to know what your local server address is for the proxy. It then uses the proxy to sit between your browser and the development server so it can inject CSS changes, or reload the page for static and JavaScript changes.

With "grunt static" you can set whether to use HTTPS.

```javascript
"tasks": {
	"local": {
		"proxy": "wee.dev"
	},
	"static": {
		"https": false
	}
}
```