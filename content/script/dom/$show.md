---
name: $show
heading: Show each matching selection
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| target | [selection](/script#selection) | -- | Target selection | ✓ |

---code---

Show works by removing the ```js-hide``` class which forces the element to hide.

```javascript
Wee.$show('ref:element');
```