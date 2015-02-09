---
name: $isArray
heading: Determine if specified argument is array
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| obj | any | -- | Value to evaluate | &#10003; |

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