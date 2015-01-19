---
name: $contents
heading: Get content of specified element
---

---table---

| Variable | Type              | Default | Description    | Required |
| -------- | ----------------- | ------- | -------------- | -------- |
| sel      | selector, element | --      | Parent element | &#10003; |

---doc---

Response including text and comment nodes.

```javascript
var $content = Wee.$contents('.element');
```