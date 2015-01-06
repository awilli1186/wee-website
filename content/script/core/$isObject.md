---
name: $isObject
heading: Determine if specified argument is an object
variables:
  - { var: "obj", desc: "Value to evaluate", type: "any", req: true }
---

---code---

```javascript
Wee.$isObject({});
Wee.$isObject('string');
```

```javascript
true
false
```