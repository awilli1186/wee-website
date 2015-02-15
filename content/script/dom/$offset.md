---
name: $offset
heading: Get the offset position of a matching selection relative to the document
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| target | [selection](/script#selection) | -- | Target selection | ✓ |

---code|type:object|modifier:split---

```javascript
Wee.$offset('ref:element');
```

```javascript
{
	top: 520,
	left: 30
}
```

---note---

**Note:** The object values are returned as unitless pixel values.