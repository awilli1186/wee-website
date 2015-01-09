---
name: URI
heading: Get currently bound URI values or set URI with a specified string or value object
variables:
  - { var: "val", desc: "URI value", type: "string, object" }
options:
  - { var: "path", desc: "", type: "string" }
  - { var: "query", desc: "", type: "object"}
  - { var: "hash", desc: "", type: "string" }
---

---doc|label:Get---

```javascript
Wee.routes.uri();
```

---doc|label:Set---

```javascript
Wee.routes.uri('/script/routes');
```