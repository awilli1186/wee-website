---
name: Legacy
---

Wee works hard to maintain compatibility with IE8 and IE9 which requires [conditionally serving](http://www.quirksmode.org/css/condcom.html) specific rules and polyfills. If you aren't supporting legacy browsers feel free to remove them. 

```html
<!--[if lt IE 9]>
<link rel="stylesheet" href="/assets/css/ie8.min.css">
<script src="/assets/js/ie8.min.js"></script>
<![endif]-->

<!--[if lte IE 9]>
<link rel="stylesheet" href="/assets/css/ie9.min.css">
<script src="/assets/js/ie9.min.js"></script>
<![endif]-->
```