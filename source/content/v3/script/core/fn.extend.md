---
name: fn.extend
heading: Extend existing controller with additional methods and properties
---

---variables---

| Variable | Type | Default | Description| Required |
| -- | -- | -- | -- | -- |
| a | string, object | -- | Controller name or core methods | ✓ |
| b | object | -- | Public methods and properties ||
| c | object | -- | Private methods and properties ||

---code|label:Extend Controller---

```javascript
Wee.fn.extend('controllerName', {
	extendedPublicFunction: function() {
		this.finalPublicFunction('output');
	}
});
```

---code|modifier:split---

```javascript
Wee.controllerName.extendedPublicFunction();
```

```javascript
"Success"
```

---code|label:Extend Core---

To extend the core pass a method object as the first argument. This can be done to add additional core methods or override default functionality.

```javascript
Wee.fn.extend({
	addNumbers: function(num1, num2) {
		return num1 + num2;
	}
});

---code|modifier:split---

```javascript
Wee.addNumbers(2, 4);
```

```javascript
6
```

---note---

**Note:** When extending a controller that doesn't exist a new controller is created.