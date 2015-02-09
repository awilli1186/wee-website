---
name: Render
---

Render parses your template using a data object.

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| temp | string | -- | Template string | &#10003; |
| data | object | -- | Data object | &#10003; |

---code|modifier:split|type:string---

```javascript
var template = 'My name is {{firstName}}{{#lastName|notEmpty}} {{lastName}}{{/lastName}}'
	data = {
		firstName: 'John',
		lastName: 'Smith'
	};

Wee.view.render(template, data);
```

```javascript
"My name is John Smith"
```