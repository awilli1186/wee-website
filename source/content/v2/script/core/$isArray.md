---
name: $isArray
heading: Determine if value is an array
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| value | any | -- | Value to evaluate | ✓ |

---code|type:boolean|modifier:split---

```javascript
Wee.$isArray([
	'string',
	'string2'
]);
Wee.$isArray('string');
```

```javascript
true
false
```