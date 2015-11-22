---
name: $first
heading: Get the first element of a matching selection
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| target | [selection](/script#selection) | -- | Target selection | ✔ |
| context | [selection](/script#selection) | document | Context selection ||

---code---

Works the same as [Wee.$()](#core) but only returns the first result from the result set.

```javascript
var $first = Wee.$first('ref:element');
```