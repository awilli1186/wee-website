---
name: Bound
heading: Get currently bound events to optional specified element and event|function
---

---table---

| Variable | Type              | Default | Description                 | Required |
| -------- | ----------------- | ------- | --------------------------- | -------- |
| sel      | selector, element | --      | Element to query for events |          |
| evt      | string            | --      | Event name                  |          |
| fn       | callback          | --      | Specific callback           |          |

---doc---

By default bound will return all bound events.

---code---

```javascript
Wee.events.bound('.element');
```

```javascript
{events}
```