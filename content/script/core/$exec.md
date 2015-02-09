---
name: $exec
heading: Execute specified function or controller method
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| fn | function, array | -- | [Function](/script/#functions)(s) to execute | &#10003; |
| opt | object | -- | Function options below ||

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| args | array | -- | Function arguments ||
| scope | object | -- | Function scope ||

---code|modifier:stacked---

```javascript
Wee.$exec('controller:function');
```

```javascript
Wee.$exec('controller:function', {
	scope: this,
	args: [
		'Hello',
		123
	]
});
```

```javascript
Wee.$exec(function() {
	//
});
```

```javascript
Wee.$exec([
	'controller:function',
	'controller2:function'
]);
```