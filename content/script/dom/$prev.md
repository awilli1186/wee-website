---
name: $prev
heading: Get the previous sibling of a specified element
---

---table---

| Variable | Type               | Default | Description                 | Required |
| -------- | ------------------ | ------- | --------------------------- | -------- |
| sel      | selector, element  | --      | Sibling element             | &#10003; |
| filter   | selector, callback | --      | Filter selector or callback |          |
| opt      | object             | --      | Callback arguments          |          |

---doc---

```javascript
var $prev = Wee.$prev('.element');
```