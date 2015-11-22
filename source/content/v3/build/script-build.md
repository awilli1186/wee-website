---
name: Script Build
description: Wee builds JavaScript in the following sequence
---

1. The primary script compiles to `public/assets/js/script.min.js` from the following:
	1. Core features enabled in `wee.json`
	2. Vendor files from `source/js/build/vendor`
	3. Remaining files from `source/js/build`
	4. Build files set in `wee.json`
	5. Core script from `source/js/script.js`
	6. Autoloaded modules from `source/modules`
		1. Vendor files from `core/js/vendor`
		2. Remaining files from `core/js`
		3. Build files set in `module.json`
		4. Core script from `core/js/script.js`
		5. Custom `module.json` directives compile to `public/assets/modules`
2. Scripts in `source/js/lib` minify into `public/assets/js/lib`
3. Custom `wee.json` directives compile to `public/assets/js`
4. Module script in `modules/*/core/js/lib` minify into `public/assets/modules/*/js/lib`