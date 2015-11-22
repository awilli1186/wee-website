---
name: $prop
heading: Get property of first matching selection or set property of each matching selection
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| target | [selection](/script#selection) | -- | Target selection | ✔ |
| a | string, object | -- | Property to get or set or an object | ✔ |
| b | [function](/script/#functions), string | -- | Value to assign to property ||

---code|type:string|modifier:split|label:Get---

```javascript
Wee.$prop('ref:element', 'checked');
```

```javascript
true
```

---code|label:Single---

```javascript
Wee.$prop('ref:element', 'checked', true);
```

---code|label:Multiple---

```javascript
Wee.$prop('ref:element', {
	checked: true,
	required: false
});
```