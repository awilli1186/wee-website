---
name: Register
---

---code---

To register a new chainable method follow the pattern below.

```javascript
Wee.$chain('setId', function(id) {
	this.attr('id', id);

	return this;
});
```

Alternatively you can register methods in a jQuery-compatible syntax.

```javascript
$.fn.setId = function(id) {
	this.data('id', id);

	return this;
}
```

To execute the method use the following.

```javascript
$('.element').setId(3).show();
```

---note---

**Note:** Be sure to return `this` at the end of your method if the function's purpose is not to return another value. This ensures the chain can continue.