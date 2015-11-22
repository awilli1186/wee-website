---
name: $remove
heading: Remove each matching selection from the document
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| target | [selection](/script#selection) | -- | Target selection | ✔ |
| context | [selection](/script#selection) | document | Context selection ||

---code---

```javascript
Wee.$remove('ref:element');
```