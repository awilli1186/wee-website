---
name: $slice
heading: Get subset of selection matches from specified range
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| target | [selection](/script#selection) | -- | Target selection | ✔ |
| start | integer | -- | Starting index | ✔ |
| end | integer | -- | Ending index | ✔ |

---code---

```javascript
Wee.$slice('li', 0, 3);
```