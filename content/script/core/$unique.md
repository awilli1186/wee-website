---
name: $unique
heading: Create new array with only unique values from specified array
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| arr | array | -- | Value array | &#10003; |

---code|type:string|modifier:split---

```javascript
Wee.$unique([1, 1, 2, 3, 4, 4, 5, 6]);
```

```javascript
[1, 2, 3, 4, 5, 6]
```