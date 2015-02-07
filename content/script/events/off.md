---
name: Off
heading: Remove specified function to specified element and optional event|function
---

---variables---

| Variable | Type              | Default | Description                 | Required |
| -------- | ----------------- | ------- | --------------------------- | -------- |
| sel      | selector, element | --      | Element to unbind from      | &#10003; |
| evt      | string            | --      | Event name                  |          |
| fn       | callback          | --      | Specific callback to remove |          |
| opt      | object            | --      | Option parameters below     |          |

---variables|label:Options Object---

| Variable | Type              | Default | Description                                | Required |
| -------- | ----------------- | ------- | ------------------------------------------ | -------- |
| one      | boolean           | false   | Remove the event after first execution     |          |
| delegate | selector, element | --      | Live watch all elements within this target |          |
| context  | selector, element | --      | Only watch elements within this context    |          |
| args     | array             | --      | Callback arguments                         |          |
| scope    | object            | --      | Callback scope                             |          |

---doc|label:Remove All---

```javascript
Wee.events.off('.element');
```

---doc|label:Remove Single---

```javascript
Wee.events.off('.element', 'click');
```