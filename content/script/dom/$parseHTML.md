---
name: $parseHTML
heading: Convert specified HTML string to a DOM object and optionally converts it to a Wee DOM object
variables:
  - { var: "html", desc: "HTML to convert", type: "string", req: true }
  - { var: "obj", desc: "Converts to Wee DOM object ", type: "boolean" }
---

```javascript
var $parseHTML = Wee.$parseHTML('<div></div>');
```