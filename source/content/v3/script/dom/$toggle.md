---
name: $toggle
heading: Toggle the display of each matching selection
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| target | [selection](/script#selection) | -- | Target selection | ✓ |

---code---

Rotates calling the [hide](#hide) and [show](#show) methods.

```javascript
Wee.$toggle('ref:element');
```