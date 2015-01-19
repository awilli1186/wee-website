---
name: $remove
heading: Remove specified element from document
---

---table---

| Variable | Type | Default | Description | Required |
| -------- | ---- | ------- | ----------- | -------- |
| sel      | selector, element | --      | Element to remove | &#10003; |
| context  | selector, element | --      | Context selector  |          |

---doc---

```javascript
Wee.$remove('.element');
```