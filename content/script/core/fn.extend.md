---
heading: Extend existing controller with additional methods and properties
---

<div class="variables">

Variable | Type | Default | Description | Required
-------- | ---- | ------- | ----------- | --------
a | string, object | &ndash; | If extending a controller the name else if extending the core begin with your public variables and methods | ✓
b | object | &ndash; | Either the public functions for controllers or the private functions for the core | ✓
c | object | &ndash; | Object of private variables and methods when extending controllers ||

</div>

### Extend Controller

```javascript
Wee.fn.extend('controllerName', {
	extendedPublicFunction: function() {
		this.finalPublicFunction('output');
	}
});
```

<div class="code">

```javascript
Wee.controllerName.extendedPublicFunction();
```

```html
Success
```

</div>

### Extend Core

```javascript
Wee.fn.extend({
	addNumbers: function(num1, num2) {
		return num1 + num2;
	}
});

Wee.coreFunction(2, 4);
```