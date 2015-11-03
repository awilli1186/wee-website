---
name: Legacy
---

IE8 doesn't support media queries. Instead of using a complicated polyfill Wee automates concatenating media queries into a single file that can be served conditionally to IE8. Additionally it includes a few rules to resolve rendering issues and the build process converts REMs to pixels and replaces opacity with a filter.