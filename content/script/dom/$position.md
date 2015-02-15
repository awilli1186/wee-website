---
name: $position
heading: Get the position of the first matching selection relative to its offset parent
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| target | [selection](/script#selection) | -- | Target selection | ✓ |

---code|type:object|modifier:split---

```javascript
Wee.$position('ref:element');
```

```javascript
{
	top: 520,
	left: 30
}
```

---note---

**Note:** The object values are returned as unitless pixel values.