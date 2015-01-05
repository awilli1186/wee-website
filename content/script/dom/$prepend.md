---
name: $prepend
heading: Prepend specified child element to specified parent element
variables:
  - { var: "sel", desc: "Parent element", type: "element, selector", req: true }
  - { var: "child", desc: "Child element", type: "element, selector", req: true }
---

```javascript
Wee.$prepend('.parent', '.child');
```