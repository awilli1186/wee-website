---
name: $exec
heading: Execute specified function or controller method
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| fn | [function](/script/#functions), array | -- | Functions to execute | ✓ |
| options | object | -- | Function options below ||

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| args | array | -- | Function arguments ||
| scope | object | -- | Function scope ||

---code|modifier:stacked---

```javascript
Wee.$exec('controllerName:methodName');
```

```javascript
Wee.$exec('controllerName:methodName', {
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
	'controllerName:methodName',
	'controllerName2:methodName2'
]);
```

---note---

**Note:** This method is mostly intended for external use although it can be used anywhere. Controller methods are best executed in the form of ```Wee.controllerName.methodName()```.