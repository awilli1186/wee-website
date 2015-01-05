---
name: $hide
heading: Hide specified element
variables:
  - { var: "sel", desc: "Element to hide",type: "element, selector", req: true }
---

---doc---

Hide works by adding the "js-hide" class which forces the element to hide.

```javascript
Wee.$hide('.element');
```