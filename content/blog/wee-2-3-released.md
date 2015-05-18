---
name: Wee 2.3.0 Released
excerpt: This is an exciting release because it's the final push before Wee 3. We've fixed a couple bugs and introduced a few new features and enhancements with this final 2.x update.
global:
  seoTitle: Wee 2.3.0 Released
  seoDesc: This is an exciting release because it's the final push before Wee 3 is released.
---

We've been hard at work to get this final Wee 2.x release published. There are a couple bug fixes and a handful of enhancements and new features.

###### Here are some of the highlights:

* Added the ability to set [global variables](/build/config#general) in project.json to be made available to the Less and JavaScript
* Added sorting options to the static site generator, can order by modified, created, or a custom YAML property. The default order is alphabetical and sort is asc.
* Added the ability to [inject assets](/build/config#server) through the built-in server in project.json
* Added the ability to inject remote generator content
* Added new columns, columns-count, columns-gap, columns-style, and columns-width [mixins](/style/mixins#multiple-columns)
* Added a new [@defaultTiming](/style/variables#miscellaneous) variable, set to ease-in-out by default
* Allow all DOM functions to append and prepend HTML without redefining the sibling nodes
* Updated the JSCS rules applicable to the latest release

To read the full changelog take a look at the [release notes](https://github.com/weepower/wee/releases/tag/2.3.0). Next up is the major Wee 3 release. To read all about what we'll be working on check out the [trello board](https://trello.com/b/7KbnQra9/wee). If you have feedback we'd love to hear.