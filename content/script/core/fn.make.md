---
name: fn.make
heading: Create namespaced controller with specified name, public object, and optional private object
---

---description---

Controllers serve as the wrapper for all custom script. They can be created per page, section, or for specific reusable components. If placed in your build directory you easily create a well-organized, extensible structure.

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| name | string | -- | Namespace of the controller | &#10003; |
| pub | object | -- | Public methods and variables | &#10003; |
| priv | object | -- | Private methods and variables ||

---code|label:Public---

```javascript
Wee.fn.make('controllerName', {
	init: function() {
		return 'Initialized';
	}
});
```

---code|modifier:split---

```javascript
Wee.controllerName.init();
```

```javascript
"Initialized"
```

---doc|label:Private/Public---

Private functions can be accessed from public methods by using ```this.$private('functionName', arguments)``` syntax. To call back into a public method from a private one use ```this.$public.functionName(arguments)```.

Also note that you have access to ```this.$get()```, ```this.$set()```, and ```this.$push()``` across both public and private methods. By default stored values are namespaced to the current controller scope. If you need to control global variables use ```Wee.$get()```, ```Wee.$set()```, and ```Wee.$push()```.

---code---

```javascript
Wee.fn.make('controllerName', {
	init: function() {
		this.anotherPublicFunction('varName'); // Call public method
		return this.$private('privateFunction', 'varName'); // Call private method
	},
	anotherPublicFunction: function(key) {
		this.$set(key, 'Success');
	},
	finalPublicFunction: function(output) {
		console.log(output);
	}
}, {
	privateFunction: function(key) {
		return this.anotherPrivateFunction(key); // Call private method
	},
	anotherPrivateFunction: function(key) {
		var output = this.$get(key);
		this.$public.finalPublicFunction(output); // Call public method
	}
});
```

---code|modifier:split---

```javascript
Wee.controllerName.init();
```

```javascript
"Success"
```

---doc|label:Constructor---

The construct method is immediately executed on controller creation.

```javascript
Wee.fn.make('controllerName', {
	_construct: function() {
		console.log('Created');
	}
});
```

---doc|label:Destructor---

The destruct method is executed when the controller is destroyed using ```this.$destroy()``` or ```Wee.controllerName.$destroy()``` outside the controller.

```javascript
Wee.fn.make('controllerName', {
	_destruct: function() {
		console.log('Destroyed');
	}
});
```

---note---

**Note:** The construct and destruct methods can be placed in the public object and/or the private object.