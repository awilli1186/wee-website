---
name: $find
heading: Get unique filtered descendants from each matching selection
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| parent | [selection](/script#selection) | -- | Parent selection | ✓ |
| filter | [selection](/script#selection) | -- | Filter selection | ✓ |

---code---

```javascript
Wee.$find('table', 'tr');
```