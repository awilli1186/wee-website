---
name: addFilter
---

Wee includes is, not, isEmpty, and notEmpty as default conditional filters. addFilter() allows the creation of custom filters.

---table---

| Variable | Type           | Default | Description           | Required |
| -------- | -------------- | ------- | --------------------- | -------- |
| a        | string, object | --      | Filter name or object | &#10003; |
| b        | callback       | --      | Filter logic          |          |

---doc---

```javascript
Wee.view.addFilter();
```