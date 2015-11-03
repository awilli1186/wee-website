---
name: $hide
heading: Hide each matching selection
related: $show
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| target | [selection](/script#selection) | -- | Target selection | ✓ |

---code---

Hide works by adding the ```js-hide``` class which applies ```display: none !important;```

```javascript
Wee.$hide('ref:element');
```