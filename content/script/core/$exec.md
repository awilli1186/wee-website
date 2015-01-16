---
name: $exec
heading: Execute specified function or controller method
---

---table---

| Variable | Type            | Default | Description            | Required |
| -------- | --------------- | ------- | ---------------------- | -------- |
| fn       | callback, array | --      | Function to execute    | &#10003; |
| opt      | object          | --      | Callback options below | &#10003; |

---table---

| Variable | Type   | Default | Description                 | Required |
| -------- | ------ | ------- | --------------------------- | -------- |
| scope    | object | --      | Callback scope              |          |
| args     | array  | --      | Injected callback arguments |          |

---doc---

```javascript
Wee.$exec('controller:functions');

Wee.$exec('controller:functions', {
	scope: this,
	arguments: [
		'Hello',
		123
	]
});

Wee.$exec(function() {
	//
});

Wee.$exec([
	'controller:function',
	'controller2:function'
]);
```