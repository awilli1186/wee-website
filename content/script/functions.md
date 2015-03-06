---
name: Functions
---

Wee brings a unique approach to referencing functions. Wherever you can provide a callback you can also use a 'controllerName:methodName' string. You can also always use a standard generic function or function reference.

---code|modifier:split---

```javascript
Wee.fn.make('controllerName', {
	methodName: function() {
		// Method logic
	}
});
```

```javascript
Wee.screen.map({
	size: 3,
	callback: 'controllerName:methodName'
});
```

---code---

Since the string method isn't supported in JavaScript natively if you ever need to use the format outside of a supported context you can use the ```$exec``` method.

```javascript
Wee.$exec('controllerName:methodName');
```

---code---

When needing to execute multiple methods you can use an array format. You can also mix method options in the array.

```javascript
Wee.routes.map({
	$any: [
		'controllerName:methodName',
		'controllerName:secondMethodName',
		function() {
			// Callback logic
		}
	]
})
```