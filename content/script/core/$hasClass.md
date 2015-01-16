---
name: $hasClass
heading: Determine if specified element has specified class
---

---table---

| Variable | Type              | Default | Description             | Required |
| -------- | ----------------- | ------- | ----------------------- | -------- |
| sel      | selector, element | --      | Selector or element     | &#10003; |
| val      | string            | --      | Class name to check for | &#10003; |

---code---

```javascript
$('.element').hasClass('class-name');
```

```javascript
false
```