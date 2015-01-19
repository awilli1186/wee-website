---
name: Segments
heading: Get all segments or single segment at index
---

---table---

| Variable | Type    | Default | Description              | Required |
| -------- | ------- | ------- | ------------------------ | -------- |
| i        | integer | --      | Zero-based segment index |          |

---doc|label:Get all---

Retrieve segment array from the currently bound path.

---code---

```javascript
Wee.routes.segments();
```

```javascript
["script", "routes"]
```

---doc|label:Get single---

Get single segment by defining zero-based index.

---code---

```javascript
Wee.routes.segments(1);
```

```javascript
routing
```