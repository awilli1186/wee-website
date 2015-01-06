---
name: $hasClass
heading: Determine if specified element has specified class
variables:
  - { var: "sel", desc: "Selector or element", type: "selector, element", req: true }
  - { var: "val", desc: "Class name to check for", type: "string", req: true }
---

---code---

```javascript
$('.element').hasClass('class-name');
```

```javascript
false
```