---
name: $append
heading: Append specified child element to parent element
variables:
  - { var: "sel", desc: "Parent element", type: "element, selector", req: true }
  - { var: "child", desc: "Child element", type: "element, selector", req: true }
---

```javascript
Wee.$append('.parent', '.child');
```