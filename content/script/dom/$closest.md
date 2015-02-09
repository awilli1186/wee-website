---
name: $closest
heading: Get the closest node of element with specified filter
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| sel | selection | -- | [Wee selection](/script/core#core) | &#10003; |
| filter | selection | -- | [Wee selection](/script/core#core) filter | &#10003; |
| context | selection | -- | [Wee selection](/script/core#core) context ||

---doc---

```javascript
var $closest = Wee.$closest('ref:element', '.js-parent');
```