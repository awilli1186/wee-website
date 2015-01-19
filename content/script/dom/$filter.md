---
name: $filter
heading: Return a subset of elements based on a specified filter from a specified element
---

---table---

| Variable | Type               | Default | Description                                              | Required |
| -------- | ------------------ | ------- | -------------------------------------------------------- | -------- |
| sel      | selector, element  | --      | Selector or element                                      | &#10003; |
| filter   | selector, callback | --      | Filter selector or callback taking the element and index | &#10003; |
| opt      | object             | --      | Callback arguments                                       |          |

---doc---

```javascript
var $filter = Wee.$filter('div', '.element');
```