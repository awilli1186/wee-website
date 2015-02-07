---
name: Map
heading: Retrieve or add route endpoints to route storage
---

---variables---

| Variable | Type| Default | Description| Required |
| -- | -- | -- | -- | -- |
| routes | object| -- | Mapping object ||
| init | boolean | -- | Immediately evaluate routes ||

---doc|label:Set---

Arguments can be nested as deep as necessary. Pass true as the second argument to immediately evaluate the specified routes from the first argument.

```javascript
Wee.routes.map({
	'$any': 'common:init',
	'script': {
		'routes': function() {
			// Current page
		}
	}
});
```

---note---

If using the <code>wee:fn</code> format to call an init method you can exclude <code>:init</code> as it is assumed if no function is provided.

---doc|label:Get---

Retrieve all the routes currently in storage.

---code|modifier:split---

```javascript
Wee.routes.map();
```

```javascript
{
	'$any': 'common:init',
	'script': {
		'routes': function(){}
	}
}
```

---doc|label:Advanced---

```javascript
Wee.routes.map({
	'$root': function(val) {
		console.log('root ' + val);
	},
	'$any': function() {
		console.log('root any');
	},
	'category': {
		'$root||$/^P[\\d]+$/': function(val) {
			console.log(val + ' root');
		},
		'$any': function() {
			console.log('category any');
		},
		'mens': function() {
			console.log('mens!');
		},
		'$/^(?!P[\\d]+).*$/': {
			'$root': function(cat) {
				console.log(cat + ' listing');
			},
			'$num': function(id) {
				console.log('product ID is ' + id);
			}
		}
	}
});

Wee.ready(function() {
	Wee.routes.run('category/name/123');
});
```