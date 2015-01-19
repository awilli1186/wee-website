---
name: Trigger
heading: Execute specific element|slector event by name and optional trigger
---

---table---

| Variable | Type | Default | Description | Required |
| -------- | ---- | ------- | ----------- | -------- |
| sel      | selector, element | --      | Element to trigger event on | &#10003; |
| evt      | string            | --      | Event name                  | &#10003; |

---doc---

```javascript
Wee.events.trigger('.element', 'click');
```