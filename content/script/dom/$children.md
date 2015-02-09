---
name: $children
heading: Get children of specified element with optional filter
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| sel | selection | -- | [Wee selection](/script/core#core) of parent | &#10003; |
| filter   | selector          | --      | Filter selector |          |

---doc---

Without a filter the function will return all direct children. Response excludes text and comment nodes.

```javascript
var $lis = Wee.$children('.element', 'li');
```