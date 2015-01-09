---
name: $slice
heading: Get subset of matches from index range
variables:
  - { var: "sel", desc: "Selector or element", type: "selector, element", req: true }
  - { var: "start", desc: "Index at which to start", type: "integer" }
  - { var: "end", desc: "Index at which to end excluding the last item", type: "integer" }
---

```javascript
var $slice = Wee.$slice('li', 0, 3);
```