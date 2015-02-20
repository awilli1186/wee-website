---
name: Render
heading: Parse data into template string
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| template | string | -- | Template string | ✓ |
| data | object | -- | Data object | ✓ |

---code|type:string|modifier:stacked|label:Simple---

```javascript
var template = '{{#!}}My name is {{firstName}}{{#lastName|notEmpty}} {{lastName}}{{/lastName}}{{/!}}',
	data = {
		firstName: 'John',
		lastName: 'Smith'
	};

Wee.view.render(template, data);
```

```javascript
"My name is John Smith"
```

---code|type:string|modifier:stacked|label:Advanced---

The render method does more than simple variable output. It can traverse as deep into the provided object as you need for multi-level output.

```javascript
var template = '{{#!}}<p>My Name is {{firstName}}{{#lastName|notEmpty}} {{lastName}}{{/lastName}}</p>' +
	'{{#children|notEmpty}}' +
		'<p>My Children are:</p>' +
		'<ul>{{#children}}' +
			'<li>{{name}} - {{age}}</li>' +
		'{{/children}}</ul>' +
	'{{/children}}{{/!}}',
	data = {
		firstName: 'John',
		lastName: 'Smith',
		children: [
			{
				name: 'Judy',
				age: '12'
			},
			{
				name: 'James',
				age: '9'
			}
		]
	};

Wee.view.render(template, data);
```

```html
<p>My Name is John Smith</p>
<p>My Children are:</p>
<ul>
	<li>Judy - 12</li>
	<li>James - 9</li>
</ul>
```