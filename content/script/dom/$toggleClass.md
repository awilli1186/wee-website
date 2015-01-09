---
name: $toggleClass
heading: Toggle the display of a specified element
variables:
  - { var: "sel", desc: "Selector or element", type: "selector, element", req: true }
  - { var: "val", desc: "Class name(s) or callback taking the element, index, and existing class name", type: "string, callback", req: true }
  - { var: "toggle", desc: "Switch", type: "boolean" }
---

```javascript
Wee.$toggleClass('.element', 'class-name');
```