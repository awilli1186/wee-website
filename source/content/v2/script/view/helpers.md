---
name: Helpers
heading: Add helper to run additional processing on tag data
---

Properties of the tag that the helper is being called on can be accessed via the current scope ```this```. These include ```val```, ```data```, ```root```, ```tag```, ```index```, and ```fallback```.

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| name | string | -- | Helper name | ✔ |
| fn | [function](/script/#functions) | -- | Helper callback | ✔ |

---code---

```javascript
Wee.view.addHelper('upper', function() {
	return this.val.toUpperCase();
});
```

---code|type:string|modifier:split---

```javascript
var template = '{{#!}}My name is {{name|upper}}.{{/!}}',
	data = {
		name: 'john'
	};

Wee.view.render(template, data);
```

```javascript
"My name is JOHN."
```

---code|label:Parametric---

```javascript
Wee.view.addHelper('starts', function(num) {
	return this.val.substr(0, num || 1);
});
```

---code|type:string|modifier:stacked---

```javascript
var template = '{{#!}}{{name}} starts with {{name|starts(5)}}.{{/!}}',
	data = {
		name: 'Rhinoceros'
	};

Wee.view.render(template, data);
```

```javascript
"Rhinoceros starts with Rhino."
```