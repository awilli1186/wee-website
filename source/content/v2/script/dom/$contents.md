---
name: $contents
heading: Get unique content of each matching selection
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| parent | [selection](/script#selection) | -- | Parent selection | ✓ |

---code---

```javascript
Wee.$contents('ref:element');
```

---note---

**Note:** The response includes text and comment nodes.