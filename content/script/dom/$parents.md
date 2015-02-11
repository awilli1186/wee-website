---
name: $parents
heading: Get unique ancestors of each matching selection
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| child | [selection](/script#selection) | -- | Child selection | ✓ |
| filter | [selection](/script#selection) | -- | Filter selection ||

---code---

```javascript
Wee.$parents('ref:element');
```