---
name: $parent
heading: Get unique parent from each matching selection
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| child | [selection](/script#selection) | -- | Child selection | ✓ |
| filter | [selection](/script#selection) | -- | Filter selection ||

---code|label:All Parents---

```javascript
Wee.$parent('ref:element');
```

---code|label:Filtered---

```javascript
Wee.$parent('ref:element', 'main');
```