---
name: Helpers
heading: Add helper to run additional processing on tag data
---

Helpers have access to certain properties via the current scope `this`. All helpers have access to `val`, `data`, `root`, `tag`, and `index`. Tag pairs have a unique property `empty` and single tags have the unique property `fallback`. A common use for helpers is filtering tag data. Default helpers used for filtering tag pairs include `is`, `not`, `isEmpty`, and `notEmpty`.  

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
var template = '{{ #! }}My name is {{ name|upper }}.{{ /! }}',
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
var template = '{{ #! }}{{ name }} starts with {{ name|starts(5) }}.{{ /! }}',
	data = {
		name: 'Rhinoceros'
	};

Wee.view.render(template, data);
```

```javascript
"Rhinoceros starts with Rhino."
```

---code|label:Boolean Response---

Returning true or false determines if the current tag pair should be parsed or skip to the next evaluation.

```javascript
Wee.view.addHelper('isNumber', function() {
	return typeof this.val == 'number';
});
```

---code|type:string|modifier:stacked---

```javascript
var template = '{{ #! }}{{ #age|isNumber }}I am {{ age }} years old.{{ /age }}{{ /! }}',
	data = {
		age: 30
	};

Wee.view.render(template, data);
```

```html
"I am 30 years old."
```

---code|label:Data Modification---

By modifying the value of `this.data` the remaining template parsing can be manipulated. The following extracts a range of data from a larger set of data.

```javascript
Wee.view.addHelper('range', function(offset, limit) {
	this.data[this.tag] = this.val.filter(function(el, i) {
		return i >= offset && i < limit;
	});
});
```

---code|type:string|modifier:stacked---

```javascript
var template = '{{ #! }}{{ #names|range(2, 5) }}{{ . }} {{ /names }}{{ /! }}',
	data = {
		names: [
			'John',
			'Jane',
			'Jim',
			'Janice',
			'Jacob',
			'Jasper'
		]
	};

Wee.view.render(template, data);
```

```javascript
"Jim Janice Jacob"
```

---note---

**Note:** Helpers can take any number of parameters.