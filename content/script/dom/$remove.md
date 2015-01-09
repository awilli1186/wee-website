---
name: $remove
heading: Remove specified element from document
variables:
  - { var: "sel", desc: "Element to remove", type: "selector, element", req: true }
  - { var: "context", desc: "Context selector", type: "selector, element" }
---

```javascript
Wee.$remove('.element');
```