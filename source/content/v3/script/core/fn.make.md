---
name: fn.make
heading: Create namespaced controller
---

Controllers serve as the wrapper for custom script. They can be created per page, section, or for specific reusable components. If placed in your build directory you easily create a well-organized, extensible structure.

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| name | string | -- | Controller name | ✓ |
| pub | object | -- | Public methods and properties | ✓ |
| priv | object | -- | Private methods and properties ||

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

---note---

**Note:** To create a new instance of a controller use the following syntax: `var instance = Wee.fn.controllerName();`

---code|label:Private/Public---

Private functions can be accessed from public methods by using ```this.$private.functionName(arguments)``` syntax. To call back into a public method from a private one use ```this.$public.functionName(arguments)```.

Also note that you have access to ```this.$get()```, ```this.$set()```, and ```this.$push()``` across both public and private methods. By default stored values are namespaced to the current controller scope. If you need to control global variables use ```Wee.$get()```, ```Wee.$set()```, and ```Wee.$push()```.

```javascript
Wee.fn.make('controllerName', {
	init: function() {
		this.anotherPublicFunction('varName'); // Call public method

		return this.$private.privateFunction('varName'); // Call private method
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

---code|label:Constructor---

The construct method is immediately executed on controller creation and is useful for setting variables or invoking additional methods.

```javascript
Wee.fn.make('controllerName', {
	_construct: function() {
		this.publicVariable = 'Public Variable';

		this.init();
	}
});
```

---code|label:Destructor---

The destruct method is executed to perform additional clean up or other actions when the controller is destroyed using ```this.$destroy()``` or ```Wee.controllerName.$destroy()``` outside the controller.

```javascript
Wee.fn.make('controllerName', {
	_destruct: function() {
		this.save();
	}
});
```

---note---

**Note:** The construct and destruct methods can be placed in the public object and/or the private object.