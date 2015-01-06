---
name: $isArray
heading: Determine if specified argument is array
variables:
  - { var: "obj", desc: "Value to evaluate", type: "any", req: true }
---

---code---

```javascript
Wee.$isArray(['sring']);
Wee.$isArray('string');
```

```javascript
true
false
```