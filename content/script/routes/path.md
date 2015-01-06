---
name: Path
heading: Get the currently bound path or set the path with specified value
variables:
  - { var: "val", desc: "Relative path from root domain", type: "string" }
  - { var: "opt", desc: "Callback parameters", type: "object" }
---

---doc|label:Get---

By default the path will be that of the current request.

---code---

```javascript
Wee.routes.path();
```

```javascript
/script/routes
```

---doc|label:Set---

Manually override the current path. Useful for dynamic navigation.

```javascript
Wee.routes.path('/specific/url');
```