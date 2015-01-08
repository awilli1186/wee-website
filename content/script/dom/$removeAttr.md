---
name: $removeAttr
heading: Remove specified attribute of specified element
variables:
  - { var: "sel", desc: "Selector or element", type: "selector, element", req: true }
  - { var: "key", desc: "Attribute name", type: "string", req: true }
---

```javascript
Wee.$removeAttr('input', 'title');
```