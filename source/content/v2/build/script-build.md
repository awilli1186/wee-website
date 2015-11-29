---
name: Script Build
heading: Wee Grunt builds scripts in the following sequence
---

1. script.min.js - this is the primary script file. It is compiled from the following:
	1. Core scripts (as enabled in the project file)
	2. Vendor build directory files
	3. Remaining build directory files
	4. Project.config build files
	5. Custom/script.js
2. Lib scripts minified in place
3. Custom directives compiled