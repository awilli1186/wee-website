---
name: Segments
heading: Get all segments or single segment at index
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| index | integer | -- | Zero-based segment index ||

---doc|label:Get all---

Retrieve segment array from the currently bound path.

---code|type:array|modifier:split---

```javascript
Wee.routes.segments();
```

```javascript
["script", "routes"]
```

---doc|label:Get single---

Get single segment by defining zero-based index.

---code|type:string|modifier:split---

```javascript
Wee.routes.segments(1);
```

```javascript
"routes"
```