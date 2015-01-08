---
name: $toggleClass
heading: Toggle the display of a specified element
variables:
- { var: "sel", desc: "Selector or element", type: "selector, element", req: true }
- { var: "val", desc: "Class to toggle or callback function taking the element, index, and existing classname", type: "string, callback", req: true }
---

```javascript
Wee.$toggleClass('.element', 'class-name');
```