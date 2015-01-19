---
name: $toggle
heading: Toggle the display of a specified element
---

---table---

| Variable | Type              | Default | Description       | Required |
| -------- | ----------------- | ------- | ----------------- | -------- |
| sel      | selector, element | --      | Element to toggle | &#10003; |

---doc---

Rotates calling the hide and show methods.

```javascript
Wee.$toggle('.element');
```