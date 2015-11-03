---
name: $type
heading: Determine the JavaScript type of an object
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| obj | any | -- | Object to evaluate | ✓ |

---code|type:boolean|modifier:split---

```javascript
Wee.$type([
	'string',
	'string2'
]);
Wee.$type({});
Wee.$type('string');
```

```javascript
array
object
string
```