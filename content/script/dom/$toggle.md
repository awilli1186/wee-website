---
name: $toggle
heading: Toggle the display of a specified element
variables:
  - { var: "sel", desc: "Element to element",type: "element, selector", req: true }
---

---doc---

Rotates calling the hide and show methods.

```javascript
Wee.$toggle('.element');
```