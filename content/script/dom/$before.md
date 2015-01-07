---
name: $before
heading: Insert specified element before specified element
variables:
  - { var: "sel", desc: "Source element", type: "selector, element" }
  - { var: "pos", desc: "Target element or a callback function which takes the element, index, and existing HTML", type: "selector, element, callback" }
  - { var: "rem", desc: "Remove target after target insertion", type: "boolean", default: "false" }
---

```javascript
Wee.$before('.second', '.first');
```