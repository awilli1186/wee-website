---
name: $prop
heading: Get property of specified element or set property with specified value
variables:
  - { var: "sel", desc: "Selector or element", type: "selector, element", req: true }
  - { var: "a", desc: "Property name or an object of properties", type: "string, object", req: true }
  - { var: "b", desc: "Property value or callback taking the element, index, and existing property", type: "string, callback" }
---

---code|label:Get|type:string---

```javascript
Wee.$prop('a', 'href');
```

```javascript
https://www.weepower.com/
```

---doc|label:Set---

```javascript
Wee.$prop('a', {
    'href': 'https://www.weepower.com/'
});
```