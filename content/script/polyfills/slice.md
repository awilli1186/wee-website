---
name: Slice
path: /public/assets/js/polyfill/wee.slice.js
---

This polyfill adds support for slicing [NodeLists](https://developer.mozilla.org/en-US/docs/Web/API/NodeList) and [HTMLCollections](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection) which is useful when working with the DOM in IE9 and below.

```javascript
var arr = Array.prototype.slice.call(nodeList);
```

---note---

**Note:** Wee requires the slice polyfill for compatibility with IE9 and below.