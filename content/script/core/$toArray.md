---
name: $toArray
heading: Cast object to array if it isn't one
variables:
  - { var: "obj", desc: "Value to convert to array", type: "string, array", req: true }
---

---code---

```javascript
Wee.$toArray(['test']);
Wee.$toArray('test');
```

```javascript
['test']
['test']
```