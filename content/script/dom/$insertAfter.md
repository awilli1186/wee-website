---
name: $insertAfter
heading: Insert specified element after specified element
---

---table---

| Variable | Type | Default | Description | Required |
| -------- | ---- | ------- | ----------- | -------- |
| next     | selector, element | --      | Target element | &#10003; |
| sel      | selector, element | --      | Source element | &#10003; |

---doc---

```javascript
Wee.$insertAfter('.second', '.first');
```