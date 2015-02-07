---
name: $parseHTML
heading: Convert specified HTML string to a DOM object and optionally converts it to a Wee DOM object
---

---variables---

| Variable | Type    | Default | Description               | Required |
| -------- | ------- | ------- | ------------------------- | -------- |
| html     | string  | --      | HTML to convert           | &#10003; |
| obj      | boolean | --      | Convert to Wee DOM object |          |

---doc---

```javascript
var $parseHTML = Wee.$parseHTML('<div></div>');
```