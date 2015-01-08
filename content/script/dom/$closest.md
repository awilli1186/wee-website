---
name: $closest
heading: Get the closest node of element with specified filter
variables:
  - { var: "sel", desc: "Selector or element", type: "selector, element", req: true }
  - { var: "filter", desc: "Filter selector", type: "selector", req: true }
---

```javascript
Wee.$closest('li', 'ul');
```