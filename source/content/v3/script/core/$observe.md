---
name: $observe
heading: Attach callback to data storage change
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| key | string | -- | TODO | ✓ |
| fn | [function](/script/#functions) | -- | TODO | ✓ |
| options | object | -- | TODO ||

---variables|label:Options Object---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| diff | boolean | false | Include diff in callback ||
| once | boolean | false | Execute only once ||
| recursive | boolean | false | Look for nested value changes ||
| value | * || Specific value to trigger callback ||

---code|type:string|modifier:split|label:Basic---

```javascript
Wee.$observe('key', function(data, type) {
	console.log(data);
}, {
	recursive: true
});
Wee.$set('key.nested', 5);
```

```javascript
{
	nested: 5
}
```

---code|type:string|modifier:split|label:Advanced---

```javascript
Wee.$set('key', 1);
Wee.$observe('key', function(data, type, diff) {
	if (type == 'set' && diff.before === 1) {
		console.log(data);
	}
}, {
	diff: true,
	once: true,
	value: 2
});
Wee.$set('key', 2);
```

```javascript
2
```