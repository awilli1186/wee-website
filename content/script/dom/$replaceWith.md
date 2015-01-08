---
name: $replaceWith
heading: Replace specified element with another specified element
variables:
  - { var: "sel", desc: "Element to replace", type: "selector, element", req: true }
  - { var: "pos", desc: "Replacement element", type: "selector, element", req: true }
---

```javascript
Wee.$replaceWith('.old', '.new');
```