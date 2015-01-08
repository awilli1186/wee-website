---
name: $remove
heading: Remove specified element from document
variables:
  - { var: "sel", desc: "Element to remove", type: "selector, element", req: true }
---

```javascript
Wee.$remove('.element');
```