---
name: $prop
heading: Get property of specified element or set property with specified value
variables:
  - { var: "sel", desc: "Selector or element", type: "selector, element", req: true }
  - { var: "a", desc: "Property name or an object of properties", type: "string, object", req: true }
  - { var: "b", desc: "Property value or callback function taking the element, index, and existing property", type: "string, callback" }
---

---code---

```javascript
Wee.$prop('a', 'href');
```

```javascript
https://www.weepower.com/
```