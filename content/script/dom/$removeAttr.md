---
name: $removeAttr
heading: Remove specified attribute of specified element
---

---variables---

| Variable | Type              | Default | Description         | Required |
| -------- | ----------------- | ------- | ------------------- | -------- |
| sel      | selector, element | --      | Selector or element | &#10003; |
| key      | string            | --      | Attribute name      | &#10003; |

---doc---

```javascript
Wee.$removeAttr('input', 'title');
```