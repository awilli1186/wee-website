---
name: $contents
heading: Get content of specified element
variables:
  - { var: "sel", desc: "Parent element", type: "selector, element", req: true }
---

---doc---

Response including text and comment nodes.

```javascript
var $content = Wee.$contents('.element');
```