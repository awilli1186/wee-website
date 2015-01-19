---
name: Map
heading: Retrieve or add route endpoints to route storage
---

---table---

| Variable | Type    | Default | Description                                | Required |
| -------- | ------- | ------- | ------------------------------------------ | -------- |
| routes   | object  | --      | Object of {key: value} route mapping pairs |          |
| init     | boolean | --      | Immediately evaluate routes                |          |

---doc|label:Set---

Arguments can be nested as deep as necessary. Pass true as the second argument to immediately evaluate the specified routes from the first argument. If using the 'wee:fn' format you can exclude ':init' as it is assumed if no function is provided.

```javascript
Wee.routes.map({
	'$any': 'common:init',
	'script': {
		'routing': function() {
			// Current page
		}
	}
});
```

---doc|label:Get---

Retrieve all the routes currently in storage.

---code---

```javascript
Wee.routes.map();
```

```javascript
{
	'$any': 'common:init',
	'script': {
		'routing': function(){}
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