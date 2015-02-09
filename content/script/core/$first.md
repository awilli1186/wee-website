---
name: $first
heading: Get first match to specified element
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| sel | selection | -- | [Wee selection](/script/core#core) | &#10003; |
| context | selection | document | [Wee selection](/script/core#core) context ||

---doc---

Works the same as [Wee.$()](#core) but only returns the first result from the result set.

```javascript
var $first = Wee.$first('ref:element');
```