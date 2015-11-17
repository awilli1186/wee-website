---
name: $toArray
heading: Cast value to array if it isn't one
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| val | any | -- | Value to convert to array | ✓ |

---code|modifier:split---

```javascript
Wee.$toArray(['test']);
Wee.$toArray('test');
```

```javascript
["test"]
["test"]
```