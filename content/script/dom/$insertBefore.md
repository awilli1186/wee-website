---
name: $insertBefore
heading: Insert specified element before specified element
variables:
  - { var: "prev", desc: "Target element", type: "selector, element", req: true }
  - { var: "self", desc: "Source element", type: "selector, element", req: true }
---

```javascript
Wee.$insertBefore('.first', '.second');
```