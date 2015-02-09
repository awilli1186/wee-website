---
name: $toArray
heading: Cast object to array if it isn't one
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| obj | string, array | -- | Value to convert to array | &#10003; |

---code|modifier:split---

```javascript
Wee.$toArray(['test']);
Wee.$toArray('test');
```

```javascript
['test']
['test']
```