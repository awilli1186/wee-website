---
name: $insertAfter
heading: Insert specified element after specified element
variables:
  - { var: "next", desc: "Target element", type: "selector, element", req: true }
  - { var: "sel", desc: "Source element", type: "selector, element", req: true }
---

```javascript
Wee.$insertAfter('.second', '.first');
```