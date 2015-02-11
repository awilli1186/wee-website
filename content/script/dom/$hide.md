---
name: $hide
heading: Hide each matching selection
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| target | [selection](/script#selection) | -- | Target selection | ✓ |

---code---

Hide works by adding the ```js-hide``` class which forces the element to hide.

```javascript
Wee.$hide('ref:element');
```