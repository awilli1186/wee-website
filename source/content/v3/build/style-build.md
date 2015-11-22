---
name: Style Build
description: Wee builds CSS in the following sequence
---

1. The primary stylesheet compiles to `public/assets/css/screen.min.css` from the following:
	1. Wee reset
	2. Core features enabled in `wee.json`
	3. Vendor files from `source/css/build/vendor`
	4. Remaining files from `source/css/build`
	5. Build files set in `wee.json`
	6. Core CSS from `source/css/screen.less` and `source/css/breakpoints`
	7. Autoloaded modules from `source/modules`
		1. Build files set in `module.json`
		2. Core style from `core/css/screen.less` and `core/css/breakpoints`
		3. Custom `module.json` directives compile to `public/assets/modules`
2. Stylesheets in `source/css/lib` minify into `public/assets/css/lib`
3. Custom `wee.json` directives compile to `public/assets/css`
4. Module CSS in `modules/*/core/css/lib` minify into `public/assets/modules/*/css/lib`