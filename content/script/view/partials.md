---
name: Partials
heading: Make partial available for inject into other templates
---

Partials are code snippets that can be reused throughout your project.

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| name | string | -- | Partial name | ✓ |
| value | string | -- | Partial value | ✓ |

---code---

```javascript
Wee.view.addPartial('copyright', '{{#!}}<small>&copy; {{year}}</small>{{/!}}');
```

---code|type:string|modifier:split---

```javascript
var template = '{{#!}}{{> copyright}}{{/!}}',
	data = {
		year: 2015
	};

Wee.view.render(template, data);
```

```javascript
"<small>&copy; 2015</small>"
```