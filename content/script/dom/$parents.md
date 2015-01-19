---
name: $parents
heading: Get unique ancestors of matched elements with optional filter
---

---table---

| Variable | Type              | Default | Description         | Required |
| -------- | ----------------- | ------- | ------------------- | -------- |
| sel      | selector, element | --      | Selector or element | &#10003; |
| filter   | selector, element | --      | Filter selector     |          |

---doc---

```javascript
var $parents = Wee.$parents('.element');
```