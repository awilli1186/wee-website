---
name: Segments
heading: Get all segments or single segment at index
variables:
- { var: "i", desc: "Zero-based segment index", type: "integer" }
---

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