---
name: $unique
heading: Create new array with only unique values from specified array
variables:
- { var: "arr", desc: "Array of values", type: "array", req: true }
---

---code---

```javascript
Wee.$unique([1, 1, 2, 3, 4, 4, 5, 6]);
```

```javascript
[1, 2, 3, 4, 5, 6]
```