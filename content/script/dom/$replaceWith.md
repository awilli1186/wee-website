---
name: $replaceWith
heading: Replace specified element with another specified element
---

---table---

| Variable | Type              | Default | Description         | Required |
| -------- | ----------------- | ------- | ------------------- | -------- |
| sel      | selector, element | --      | Element to replace  | &#10003; |
| pos      | selector, element | --      | Replacement element | &#10003; |

---doc---

```javascript
Wee.$replaceWith('.old', '.new');
```