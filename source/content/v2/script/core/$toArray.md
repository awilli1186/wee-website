---
name: $toArray
heading: Cast object to array if it isn't one
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| value | string, array | -- | Value to convert to array | ✔ |

---code|modifier:split---

```javascript
Wee.$toArray(['test']);
Wee.$toArray('test');
```

```javascript
['test']
['test']
```