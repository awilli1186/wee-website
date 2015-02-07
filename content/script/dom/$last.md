---
name: $last
heading: Get last match of specified element
---

---variables---

| Variable | Type              | Default | Description      | Required |
| -------- | ----------------- | ------- | ---------------- | -------- |
| sel      | selector, element | --      | Last element     | &#10003; |
| context  | selector, element | --      | Context selector |          |

---doc---

```javascript
var $li = Wee.$last('.element li');
```