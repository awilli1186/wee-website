---
name: Style Build
heading: Wee Grunt builds the styles in the following sequence
---

1. style.min.css - this is the primary CSS file. The following items are 
compiled:
	1. Reset
	2. Core components (as enabled in the project file)
	3. Vendor build directory files
	4. Remaining build directory files
	5. Project.config build files
	6. Custom/screen.less and breakpoints
2. Custom directives compiled
3. Lib scripts minified in place