---
name: $set
heading: Set global variable
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| key | string | -- | Storage reference | ✓ |
| val | any | -- | Stored value | ✓ |
| opt | object | -- | [Callback options](/script#functions) ||

---code|modifier:split|label:Simple---

```javascript
Wee.$set('key', 'Success');
```

```javascript
"Success"
```

---code|type:response|modifier:stacked|label:Callbacks---

```javascript
Wee.$set('key', function() {
	return 5 * 5;
});
```

```javascript
Wee.$set('key', 'controllerName:publicFunction', {
	scope: this,
	args: [
		'Hello',
		123
	]
});
```