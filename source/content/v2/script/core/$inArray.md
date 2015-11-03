---
name: $inArray
heading: Determine if value belongs to array
deprecated: true
---

---notice---

<b>Deprecated:</b> array.indexOf(val) should be used instead.

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| array | array | -- | Source array | ✓ |
| value | any | -- | Value to check | ✓ |

---code|modifier:split---

```javascript
var arr = [
	'value',
	'value2',
	'value3'
];

Wee.$inArray(arr, 'value');
Wee.$inArray(arr, 'value2');
Wee.$inArray(arr, 'value4');
```

```javascript
0
1
false
```