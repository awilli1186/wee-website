---
name: Config
---

As with the rest of Wee, modules are configured with the same basic JSON-based configuration file.

name & description - For internal reference only.
version (not mentioning it right now)
homepage & author - For attributing authorship and citing documentation if it exists.
autoload - When set to true, the scripts and styling will be compiled directly into the global style.min.css and script.min.js files. If set to false, separate minified files will be compiled into public/assets/modules/{moduleName}/.
data - As with the wee.json, this will inject data into script and styling by either Wee global variables or as Less variables.
style & script - Similar wording to wee.json.