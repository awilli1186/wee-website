---
name: addFilter
---

This allows the creation of custom filters. Wee's default filters include is, not, isEmpty, and notEmpty. Properties of the tag that is being filtered can be accessed via the current scope this. These include val, data, root, tag, inner, and empty.

---variables---

| Variable | Type     | Default | Description  | Required |
| -------- | -------- | ------- | ------------ | -------- |
| a        | string   | --      | Filter name  | ✓ |
| b        | callback | --      | Filter logic | ✓ |

---code---

```javascript
Wee.view.addFilter('isNumber', function() {
	return typeof this.val == 'number';
});
```

---code|modifier:stacked|type:string---

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