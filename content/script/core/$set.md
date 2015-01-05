---
name: $set
heading: Set public variable
variables:
  - { var: "key", desc: "Reference to store the value under", type: "string", req: true }
  - { var: "val", desc: "Value to store", type: "any", req: true }
  - { var: "opt", desc: "Callback options", type: "object" }
---

---doc---

### Simple

---code---

```javascript
Wee.$set('key', 'Success');
```

```html
Success
```

---doc---

### Callbacks

---code---

```javascript
Wee.$set('key', function() {
	return 5 * 5;
});

Wee.$set('key', 'controllerName:publicFunction');

Wee.$set('key', 'controllerName:publicFunction', {
	scope: this,
	args: [
		'Hello',
		123
	]
});
```

```html
25
Success
Success
```