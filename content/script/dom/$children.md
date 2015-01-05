---
name: $children
heading: Get children of specified element with optional filter
variables:
  - { var: "sel", desc: "Parent element",type: "element, selector", req: true }
  - { var: "filter", desc: "Filter selector", type: "selector" }
---

---doc---

Without a filter the function will return all direct children. Response excludes text and comment nodes.

```javascript
var $lis = Wee.$children('.element', 'li');
```