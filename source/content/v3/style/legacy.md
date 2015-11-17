---
name: Legacy
---

IE8 doesn't support media queries. Instead of using a complicated and unnecessary polyfill Wee automates concatenating media queries into a single stylesheet that can be conditionally loaded. Additionally it includes a few rules to resolve rendering issues and the build process converts unsupported units and properties.