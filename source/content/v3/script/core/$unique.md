---
name: $unique
heading: Create new array with only unique values from source array
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| array | array | -- | Value array | ✓ |

---code|type:string|modifier:split---

```javascript
Wee.$unique([1, 1, 2, 3, 3, 3, 4]);
```

```javascript
[1, 2, 3, 4]
```