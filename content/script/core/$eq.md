---
name: $eq
heading: Get indexed node of specified element
variables:
  - { var: "sel", type: "selector, element", req: true }
  - { var: "i", type: "number", req: true }
---

---code---

```javascript
Wee.$eq($('div'), 0);
```

```html
<div></div>
```