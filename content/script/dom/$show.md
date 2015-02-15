---
name: $show
heading: Show each matching selection
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| target | [selection](/script#selection) | -- | Target selection | ✓ |

---code---

Show works by removing the ```js-hide``` class either set manually or through [Wee.$hide()](#hide).

```javascript
Wee.$show('ref:element');
```