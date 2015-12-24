---
name: Script Build
heading: Wee builds JavaScript in the following sequence
---

1. The primary script compiles to `public/assets/js/script.min.js` from the following:
	1. Core features enabled in `wee.json`
	2. Vendor files from `source/js/build/vendor`
	3. Init script from `source/js/init.js`
	4. Remaining files from `source/js/build`
	5. Build files set in `wee.json`
	6. Core script from `source/js/script.js`
	7. Autoloaded modules from `source/modules`
		1. Vendor files from `core/js/vendor`
		2. Init script from `core/js/init.js`
		3. Remaining files from `core/js`
		4. Build files set in `module.json`
		5. Core script from `core/js/script.js`
		6. Custom `module.json` directives compile to `public/assets/modules`
2. Scripts in `source/js/lib` minify into `public/assets/js/lib`
3. Custom `wee.json` directives compile to `public/assets/js`
4. Module script in `modules/*/core/js/lib` minify into `public/assets/modules/*/js/lib`