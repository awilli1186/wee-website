---
name: $width
heading: Get or set the width of a specified element, optionally accounting for margin
variables:
  - { var: "sel", desc: "Selector or element", type: "selector, element", req: true }
  - { var: "val", desc: "Value to set or a callback function taking the element, index, and existing value", type: "string, integer, callback" }
---

```javascript
Wee.$width('.element', '5rem');
```