---
name: Trigger
heading: Execute specific element or selector event by name and optional trigger
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| sel | selection | -- | [Wee selection](/script/core#core) | &#10003; |
| a | string | -- | Event name | &#10003; |

---doc---

```javascript
Wee.events.trigger('ref:element', 'click');
```