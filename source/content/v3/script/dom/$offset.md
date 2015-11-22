---
name: $offset
heading: Get the offset position of a matching selection relative to the document
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| target | [selection](/script#selection) | -- | Target selection | ✔ |
| value | object | -- | Offset values ||

---code|label:Set---

```javascript
Wee.$offset('ref:element', {
	top: 100,
	left: 20
});
```

---code|type:object|modifier:split|label:Get---

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