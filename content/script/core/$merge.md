---
name: $merge
heading: Merge specified array with specified source array
variables:
  - { var: "arr", desc: "Target array", type: "array", req: true }
  - { var: "arr2", desc: "Source array", type: "array", req: true }
  - { var: "dup", desc: "Remove duplicates", type: "boolean", default: "false" }
---

---code---

```javascript
var arr1 = [1, 2, 3],
arr2 = [4, 5, 6];

Wee.$merge(arr1, arr2);
```

```javascript
[1, 2, 3, 4, 5, 6]
```