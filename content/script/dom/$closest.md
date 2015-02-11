---
name: $closest
heading: Get unique closest ancestors of each matching selection
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| target | [selection](/script#selection) | -- | Target selection | ✓ |
| filter | [selection](/script#selection) | -- | Filter selection | ✓ |
| context | [selection](/script#selection) | -- | Context selection ||

---code---

```javascript
Wee.$closest('ref:element', '.js-ancestor');
```

---note---

**Note:** This method traverses up the DOM for the closest match so it doesn't match descendents.