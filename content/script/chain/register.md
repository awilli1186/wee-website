---
name: Register
---

---code---

To register a new chainable method follow the pattern below.

```javascript
Wee.$chain('setId', function(id) {
	this.data('id', id);

	return this;
});
```

To execute the method use the following.

```javascript
$('.element').setId(3).anotherMethod();
```

---note---

**Note:** Be sure to return `this` at the end of your method if the function's purpose is not to return another value. This ensures the chain can be continued.