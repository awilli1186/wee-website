---
name: $parseHTML
heading: Create document fragment from an HTML string
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| html | string | -- | HTML to convert | ✔ |

---code---

```javascript
var el = Wee.$parseHTML('<span class="testing">Testing</span>');
Wee.$hasClass(el.childNodes, 'testing');
```