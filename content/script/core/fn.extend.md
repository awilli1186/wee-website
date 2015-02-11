---
name: fn.extend
heading: Extend existing controller with additional methods and properties
---

---variables---

| Variable | Type | Default | Description| Required |
| -- | -- | -- | -- | -- |
| a | string, object | -- | Controller namespace or core object | ✓ |
| b | object | -- | Public object or private object ||
| c | object | -- | Private object ||

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

---doc|label:Extend Core---

To extend the core simply exclude the first parameter. This can be done to add additional core methods or override default functionality.

---code---

```javascript
Wee.fn.extend({
	addNumbers: function(num1, num2) {
		return num1 + num2;
	}
});

Wee.addNumbers(2, 4);
```

---note---

**Note:** When extending a controller that doesn't exist a new controller is created.