---
name: $hide
heading: Hide specified element
---

---table---

| Variable | Type              | Default | Description     | Required |
| -------- | ----------------- | ------- | --------------- | -------- |
| sel      | selector, element | --      | Element to hide | &#10003; |

---doc---

Hide works by adding the "js-hide" class which forces the element to hide.

```javascript
Wee.$hide('.element');
```