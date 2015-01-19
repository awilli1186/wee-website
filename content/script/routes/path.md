---
name: Path
heading: Get the currently bound path or set the path with specified value
---

---table---

| Variable | Type | Default | Description | Required |
| -------- | ---- | ------- | ----------- | -------- |
| val      | string | --      | Relative path from root domain |          |
| opt      | object | --      | Callback parameters            |          |

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