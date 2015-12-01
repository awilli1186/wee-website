---
name: Structure
heading: Similar organization to the core Wee setup
---

The heart of the code in a module should reside inside the core directory. Beyond permanent modifications by the original author, the core directory should be left alone and any specific overrides be set in the module.json. Check out the [style](/build#style-build) and [script](/build#script-build) docs to understand where autoloaded modules fit into the build process.

---collapsible---

* module.json
* core/
	* css/
		* screen.less
		* variables.less
		* breakpoints/
	* js/
		* script.js
		* views/
			* load/
* css/
* fonts/
* img/
* js/

---note---

**Note:** All the directories and files in the module are optional.

---docs---

To download the latest module boilerplate visit [GitHub](https://github.com/weepower/wee-module). You can also run the [make command](/build/commands#make) to create one using the Wee CLI.