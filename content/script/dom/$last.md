---
name: $last
heading: Get the last element of a matching selection
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| target | [selection](/script#selection) | -- | Target selection | ✓ |
| context | [selection](/script#selection) | document | Context selection ||

---code---

Works the same as [Wee.$()](#core) but only returns the last result from the result set.

```javascript
Wee.$last('.js-element li');
```