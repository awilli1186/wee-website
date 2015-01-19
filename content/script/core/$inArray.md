---
name: $inArray
heading: Determine if specified element belongs to specified array
---

---table---

| Variable | Type  | Default | Description                  | Required |
| -------- | ----- | ------- | ---------------------------- | -------- |
| obj      | array | --      | Source array                 | &#10003; |
| el       | any   | --      | Specified value to check for | &#10003; |

---code---

```javascript
var arr = [
	'value',
	'value2',
	'value3'
];

Wee.$inArray('value');
Wee.$inArray('value2');
Wee.$inArray('value4');
```

```javascript
0
1
false
```