---
name: $parent
heading: Get unique parent from each matching selection
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| child | [selection](/script#selection) | -- | Child selection | ✓ |
| filter | [selection](/script#selection) | -- | Filter selection ||

---code|label:Selection Parent---

```javascript
Wee.$parent('ref:element');
```

---code|label:Filtered---

Return selection parent only if it matches the filter.

```javascript
Wee.$parent('ref:element', 'main');
```