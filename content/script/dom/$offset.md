---
name: $offset
heading: Get the offset of a specified element
variables:
  - { var: "sel", desc: "Selector or element", type: "selector, element", req: true }
---

```javascript
var $offset = Wee.$offset('body');
```