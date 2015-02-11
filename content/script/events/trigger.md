---
name: Trigger
heading: Execute event for each matching selection
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| target | [selection](/script#selection) | -- | Target selection | ✓ |
| event | string | -- | Event name | ✓ |

---doc---

```javascript
Wee.events.trigger('ref:element', 'click');
```