---
name: $equals
heading: Compare two values for strict equality
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| a | object | -- | Original value | ✔ |
| b | object | -- | Compared value | ✔ |

---code|type:boolean|modifier:split---

```javascript
Wee.$equals(1, 2);
Wee.$equals({
	key: true
}, {
	key: false
});
Wee.$equals([1, 2, 3], [1, 2, 3]);
```

```javascript
false
false
true
```