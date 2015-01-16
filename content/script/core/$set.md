---
name: $set
heading: Set public variable
---

---table---

| Variable | Type   | Default | Description                        | Required |
| -------- | ------ | ------- | ---------------------------------- | -------- |
| key      | string | --      | Reference to store the value under | &#10003; |
| val      | any    | --      | Value to store                     | &#10003; |
| opt      | object | --      | Callback options                   |          |

---code|label:Simple---

```javascript
Wee.$set('key', 'Success');
```

```javascript
Success
```

---code|label:Callbacks---

```javascript
Wee.$set('key', function() {
	return 5 * 5;
});

Wee.$set('key', 'controllerName:publicFunction');

Wee.$set('key', 'controllerName:publicFunction', {
	scope: this,
	args: [
		'Hello',
		123
	]
});
```

```javascript
25
Success
Success
```