---
name: $empty
heading: Remove child nodes from specified element
variables:
  - { var: "sel", desc: "Element to empty", type: "selector, element", req: true }
---

```javascript
Wee.$empty('.element');
```