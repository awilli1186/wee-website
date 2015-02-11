---
name: Trigger
heading: Execute specific element or selector event by name and optional trigger
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| sel | [selection](/script#selection) | -- | [Wee selection](/script/core#core) | ✓ |
| a | string | -- | Event name | ✓ |

---doc---

```javascript
Wee.events.trigger('ref:element', 'click');
```