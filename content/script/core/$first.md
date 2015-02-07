---
name: $first
heading: Get first match to specified element
---

---variables---

| Variable | Type              | Default  | Description       | Required |
| -------- | ----------------- | -------- | ----------------- | -------- |
| sel      | selector          | --       | Lookup selector   | &#10003; |
| context  | selector, element | document | Selection context |          |

---doc---

Works the same as Wee.$() but only returns the first result from the result set.

```javascript
var $first = Wee.$first('.element');
```