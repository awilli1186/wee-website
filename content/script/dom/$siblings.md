---
name: $siblings
heading: Get siblings of specified element with optional filter
---

---variables---

| Variable | Type              | Default | Description     | Required |
| -------- | ----------------- | ------- | --------------- | -------- |
| sel      | selector, element | --      | Sibling element | &#10003; |
| filter   | selector          | --      | Sibling filter  |          |

---doc---

```javascript
var $lis = Wee.$siblings('.element', 'li');
```