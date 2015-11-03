---
name: Path
heading: Get the currently bound path or set the path with specified value
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| value | string | -- | Relative path from root domain ||
| options | object | -- | Callback parameters ||

---doc|label:Get---

By default the path will be that of the current request.

---code|modifier:split|type:string---

```javascript
Wee.routes.path();
```

```javascript
"/script/routes"
```

---code|label:Set---

Manually override the current path. Useful for dynamic navigation.

```javascript
Wee.routes.path('/specific/url');
```