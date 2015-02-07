---
name: $slice
heading: Get subset of matches from index range
---

---variables---

| Variable | Type              | Default | Description                                  | Required |
| -------- | ----------------- | ------- | -------------------------------------------- | -------- |
| sel      | selector, element | --      | Selector or element                          | &#10003; |
| start    | integer           | --      | Index at which to start                      |          |
| end      | integer           | --      | Index at which to end exluding the last item |          |

---doc---

```javascript
var $slice = Wee.$slice('li', 0, 3);
```