---
name: addFilter
heading: Add conditional template handler or data modifier
---

Wee's default filters include is, not, isEmpty, and notEmpty. Properties of the tag that is being filtered can be accessed via the current scope this. These include val, data, root, tag, inner, and empty.

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| name | string | -- | Filter name | ✓ |
| fn | [function](/script/#functions) | -- | Filter callback | ✓ |

---code---

```javascript
Wee.view.addFilter('isNumber', function() {
	return typeof this.val == 'number';
});
```

---code|type:string|modifier:stacked---

```javascript
var template = '{{#!}}{{#age|isNumber}}I am {{age}} years old.{{/age}}{{/!}}',
	data = {
		age: 30
	};

Wee.view.render(template, data);
```

```javascript
"I am 30 years old."
```