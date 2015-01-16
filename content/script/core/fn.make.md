---
name: fn.make
heading: Create namespaced controller with specified name, public object, and optional private object
---

---description---

Controllers serve as the wrapper for all custom script. They can be created per page, section, or for specific reusable components. If placed in your build directory you easily create a well-organized, extensible structure.

---table---

| Variable | Type   | Default | Description                             | Required |
| -------- | ------ | ------- | --------------------------------------- | -------- |
| name     | string | --      | Namespace of the controller             | &#10003; |
| pub      | object | --      | Object of public variables and methods  | &#10003; |
| priv     | object | {}      | Object of private variables and methods |          |

---doc|label:Public---

```javascript
Wee.fn.make('controllerName', {
	init: function() {
		return 'Initialized';
	}
});
```

---code---

```javascript
Wee.controllerName.init();
```

```javascript
Initialized
```

---doc|label:Private/Public---

Private functions can be accessed from public methods by using ```this.$private('functionName, arguments..)``` syntax. To call back into a public method from a private one use ```this.$public.functionName(arguments...)```.

Also note that you have access to ```this.$set()```, ```this.$push()```, and ```this.$get()``` across both public and private methods. By default stored values are namespaced to the current controller scope. If you need to access variables globally use ```Wee.$set()```, ```Wee.$push()```, and ```Wee.$get()```.

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

---code---

```javascript
Wee.controllerName.init();
```

```javascript
Success
```

---doc|label:Constructor/Destructor---

The construct method is immediately invoked when the controller is created. Alternatively the destruct method is called when the controller is destroyed by using ```this.$destroy()``` inside the controller or ```Wee.controllerName.$destroy()``` externally.

```javascript
Wee.fn.make('controllerName', {
	_construct: function() {
		console.log('Created');
	},
	_destruct: function() {
		console.log('Destroyed');
	}
});
```