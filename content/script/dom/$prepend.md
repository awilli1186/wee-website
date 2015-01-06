---
name: $prepend
heading: Prepend specified child element to specified parent element
variables:
  - { var: "sel", desc: "Parent element", type: "selector, element", req: true }
  - { var: "child", desc: "Child element", type: "selector, element", req: true }
---

```javascript
Wee.$prepend('.parent', '.child');
```