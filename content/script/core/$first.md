---
name: $first
heading: Get first match to specified element
variables:
  - { var: "sel", desc: "Lookup selector", type: "selector", req: true }
  - { var: "context", desc: "Selection context", type: "selector, element", default: "document" }
---

---doc---

Works the same as Wee.$() but only returns the first result from the result set.

```javascript
var $first = Wee.$first('.element');
```