---
name: fn.extend
heading: Extend existing controller with additional methods and properties
---

---table---

| Variable | Type           | Default | Description                                                                                                | Required |
| -------- | -------------- | ------- | ---------------------------------------------------------------------------------------------------------- | -------- |
| a        | string, object | --      | If extending a controller the name else if extending the core being with your public variables and methods | &#10003; |
| b        | object         | --      | Either the public functions for controllers or the private functions for the core                          | &#10003; |
| c        | object         | --      | Object of private variables and methods when extending controllers                                         |          |

---doc|label:Extend Controller---

```javascript
Wee.fn.extend('controllerName', {
	extendedPublicFunction: function() {
		this.finalPublicFunction('output');
	}
});
```

---code---

```javascript
Wee.controllerName.extendedPublicFunction();
```

```javascript
Success
```

---doc|label:Extend Core---

```javascript
Wee.fn.extend({
	addNumbers: function(num1, num2) {
		return num1 + num2;
	}
});

Wee.addNumbers(2, 4);
```