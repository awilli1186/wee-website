---
name: $toggle
heading: Toggle the display of a specified element
variables:
  - { var: "sel", desc: "Element to toggle",type: "selector, element", req: true }
---

---doc---

Rotates calling the hide and show methods.

```javascript
Wee.$toggle('.element');
```