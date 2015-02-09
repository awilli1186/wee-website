---
name: $addClass
heading: Add specified class name to specified element
---

---variables---

| Variable | Type              | Default | Description                                                                         | Required |
| -------- | ----------------- | ------- | ----------------------------------------------------------------------------------- | -------- |
| sel      | selector, element | --      | Selector or element                                                                 | &#10003; |
| val      | string, callback  | --      | Class name(s) to add, or callback taking the element, index, and existing classname | &#10003; |

---doc---

Separate multiple class names with spaces.

```javascript
$('.element').addClass('modifier');
```