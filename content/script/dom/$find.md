---
name: $find
heading: Get matching nodes based on a specified filter within a specified element
---

---variables---

| Variable | Type              | Default | Description     | Required |
| -------- | ----------------- | ------- | --------------- | -------- |
| sel      | selector, element | --      | Source element  | &#10003; |
| filter   | selector          | --      | Filter selector | &#10003; |

---doc---

```javascript
var $find = Wee.$find('table', 'tr');
```