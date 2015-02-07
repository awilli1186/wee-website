---
name: Bound
heading: Get currently bound events to optional specified element, event, and function
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| sel | selector, element | -- | Element to query for events ||
| evt | string | -- | Event name ||
| fn | function | -- | Specific callback ||

---doc---

By default bound will return all bound events.

---code|modifier:split---

```javascript
Wee.events.bound('.element');
```

```javascript
{events}
```