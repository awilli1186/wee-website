---
name: $unique
heading: Create new array with only unique values from specified array
---

---table---

| Variable | Type  | Default | Description     | Required |
| -------- | ----- | ------- | --------------- | -------- |
| arr      | array | --      | Array of values | &#10003; |

---code---

```javascript
Wee.$unique([1, 1, 2, 3, 4, 4, 5, 6]);
```

```javascript
[1, 2, 3, 4, 5, 6]
```