---
name: $show
heading: Show specified element
---

---table---

| Variable | Type              | Default | Description        | Required |
| -------- | ----------------- | ------- | ------------------ | -------- |
| sel      | selector, element | --      | Element to display | &#10003; |

---doc---

Show works by removing the "js-hide" class.

```javascript
Wee.$show('.element');
```