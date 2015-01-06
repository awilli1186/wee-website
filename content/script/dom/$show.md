---
name: $show
heading: Show specified element
variables:
  - { var: "sel", desc: "Element to display",type: "selector, element", req: true }
---

---doc---

Show works by removing the "js-hide" class.

```javascript
Wee.$show('.element');
```