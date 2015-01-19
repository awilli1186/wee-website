---
name: $insertBefore
heading: Insert specified element before specified element
---

---table---

| Variable | Type              | Default | Description    | Required |
| -------- | ----------------- | ------- | -------------- | -------- |
| prev     | selector, element | --      | Target element | &#10003; |
| sel      | selector, element | --      | Source element | &#10003; |

---doc---

```javascript
Wee.$insertBefore('.first', '.second');
```