---
name: $parseHTML
heading: Create a DOM object from an HTML string
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| html | string | -- | HTML to convert | ✓ |

---code---

```javascript
var newElem = Wee.$parseHTML('<span class="testing">Testing</span>');
Wee.$hasClass(newElem, 'testing');
```