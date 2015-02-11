---
name: $siblings
heading: Get unique siblings of each matching selection
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| target | [selection](/script#selection) | -- | Target selection | ✓ |
| filter | [selection](/script#selection) | -- | Filter selection | ✓ |

---code|label:All Children---

Without a filter all siblings will be returned.

```javascript
Wee.$siblings('ref:element');
```

---code|label:Filtered---

```javascript
Wee.$siblings('ref:element', 'li');
```