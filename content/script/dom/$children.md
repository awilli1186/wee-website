---
name: $children
heading: Get unique direct children of each matching selection
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| parent | [selection](/script#selection) | -- | Parent selection | ✓ |
| filter | [selection](/script#selection) | -- | Filter selection ||

---code|label:All Children---

Without a filter all direct children will be returned.

```javascript
Wee.$children('ref:element');
```

---code|label:Filtered---

With a filter, only matching children will be returned.

```javascript
Wee.$children('ref:element', 'li');
```

---note---

**Note:** The response excludes text and comment nodes.