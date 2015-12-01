---
name: Config
heading: Modules are configured much like the Wee core
---

These properties are for internal or distributed reference.

```javascript
"name": "Module Name",
"version": "1.0.0",
"description": "Module description.",
"homepage": "https://www.weepower.com",
"author": "Wee",
```

---code|label:Settings---

When autoload is set to true, the scripts and styling will be compiled directly into the global style.min.css and script.min.js files. If set to false, separate minified files will be compiled into public/assets/modules/moduleName/.

The extension setting, when set to true gives your Less access to all the custom variables, mixins, etc from your core project. In most scenarios you want this to be false to create true isolation between the module and the root project.

```javascript
"autoload": true,
"extension": false
```

---code|label:Global Data---

As with the wee.json, sharing global data across your script and style is simple. Set key-value pairs to be made available to both. You can also set data specifically in either the script or style config blocks to limit the scope.

```javascript
"data": {
	"brandColor": "#0f0"
}
```

---code|label:Script and Style---

These optional blocks work just like they do in the [core configuration](/build/config) however paths are relative to the module.json file instead.

```javascript
"style": {
	"build": [
		"css/variables.less",
		"css/screen.less"
	]
},
"script": {
	"build": [
		"js/script.js"
	]
}
```