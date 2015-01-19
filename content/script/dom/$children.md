---
name: $children
heading: Get children of specified element with optional filter
---

---table---

| Variable | Type              | Default | Description     | Required |
| -------- | ----------------- | ------- | --------------- | -------- |
| sel      | selector, element | --      | Parent element  | &#10003; |
| filter   | selector          | --      | Filter selector |          |

---doc---

Without a filter the function will return all direct children. Response excludes text and comment nodes.

```javascript
var $lis = Wee.$children('.element', 'li');
```