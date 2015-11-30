---
name: Legacy
---

Wee maintains compatibility with IE9 which requires [conditionally serving](http://www.quirksmode.org/css/condcom.html) specific rules and polyfills. If you aren't supporting legacy browsers feel free to remove this. 

```html
<!--[if lte IE 9]>
<script src="/assets/js/ie9.min.js"></script>
<![endif]-->
```