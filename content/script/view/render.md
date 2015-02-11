---
name: Render
---

Render parses your template using a data object.

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| temp | string | -- | Template string | ✓ |
| data | object | -- | Data object | ✓ |

---code|modifier:stacked|type:string---

```javascript
var template = '{{#!}}My name is {{firstName}}{{#lastName|notEmpty}} {{lastName}}{{/lastName}}{{/!}}'
	data = {
		firstName: 'John',
		lastName: 'Smith'
	};

Wee.view.render(template, data);
```

```javascript
"My name is John Smith"
```