---
name: $removeAttr
heading: Remove specified attribute of each matching selection
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| target | [selection](/script#selection) | -- | Target selection | ✔ |
| name | string | -- | Attribute name | ✔ |

---code---

```javascript
Wee.$removeAttr('ref:element', 'title');
```