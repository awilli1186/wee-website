---
name: $isString
heading: Determine if specified argument is a string
variables:
  - { var: "obj", desc: "Value to evaluate", type: "any", req: true }
---

---code---

```javascript
Wee.$isString({});
Wee.$isString('string');
```

```javascript
false
true
```