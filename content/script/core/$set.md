---
name: $set
heading: Set public variable
---

<div class="variables">

Variable | Type | Default | Description | Required
-------- | ---- | ------- | ----------- | --------
key | string | &ndash; | Reference to store the value under | ✓
val | any | &ndash; | Value to store | ✓
opt | object | &ndash; | Callback options ||

</div>

### Simple

<div class="code">

```javascript
Wee.$set('key', 'Success');
```

```html
Success
```

</div>

### Callbacks

<div class="code">

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

</div>