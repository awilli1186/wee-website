---
name: $inArray
heading: Determine if specified element belongs to specified array
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| obj | array | -- | Source array | &#10003; |
| el | any | -- | Value to check | &#10003; |

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