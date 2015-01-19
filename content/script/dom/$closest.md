---
name: $closest
heading: Get the closest node of element with specified filter
---

---table---

| Variable | Type              | Default | Description         | Required |
| -------- | ----------------- | ------- | ------------------- | -------- |
| sel      | selector, element | --      | Selector or element | &#10003; |
| filter   | selector, element | --      | Filter selector     | &#10003; |
| context  | selector, element | --      | Context selector    |          |

---doc---

```javascript
var $closest = Wee.$closest('.child', '.parent');
```