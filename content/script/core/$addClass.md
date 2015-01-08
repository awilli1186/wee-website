---
name: $addClass
heading: Add specified class name to specified element
variables:
  - { var: "sel", desc: "Selector or element", type: "selector, element", req: true }
  - { var: "val", desc: "Class name(s) to add, or callback function taking the element, index, and existing classname", type: "string, callback", req: true }
---

---doc---

Separate multiple class names with spaces.

```javascript
$('.element').addClass('modifier');
```