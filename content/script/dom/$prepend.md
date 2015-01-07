---
name: $prepend
heading: Prepend specified child element to specified parent element
variables:
  - { var: "sel", desc: "Parent element", type: "selector, element", req: true }
  - { var: "child", desc: "Child element or a callback function which takes the element, index, and existing HTML", type: "selector, element, callback", req: true }
---

```javascript
Wee.$prepend('.parent', '.child');
```