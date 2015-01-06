---
name: $isFunction
heading: Determine if specified argument is a function
variables:
  - { var: "obj", desc: "Value to evaluate", type: "any", req: true }
---

---code---

```javascript
Wee.$isFunction({});
Wee.$isFunction('string');
Wee.$isFunction(function() {});
```

```javascript
false
false
true
```