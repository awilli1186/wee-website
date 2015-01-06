---
name: fn.extend
heading: Extend existing controller with additional methods and properties
variables:
  - { var: "a", desc: "If extending a controller the name else if extending the core begin with your public variables and methods", type: "string, object", req: true }
  - { var: "b", desc: "Either the public functions for controllers or the private functions for the core", type: "object", req: true }
  - { var: "c", desc: "Object of private variables and methods when extending controllers", type: "object" }
---

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