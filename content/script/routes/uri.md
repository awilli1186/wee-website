---
name: URI
heading: Get currently bound URI values or set URI with a specified string or value object
---

---table---

| Variable | Type           | Default | Description | Required |
| -------- | -------------- | ------- | ----------- | -------- |
| val      | string, object | --      | URI value   |          |

---table---

| Variable | Type   | Default | Description | Required |
| -------- | ------ | ------- | ----------- | -------- |
| path     | string | --      | Path        |          |
| query    | object | --      | Query       |          |
| hash     | string | --      | Hash        |          |

---doc|label:Get---

```javascript
Wee.routes.uri();
```

---doc|label:Set---

```javascript
Wee.routes.uri('/script/routes');
```