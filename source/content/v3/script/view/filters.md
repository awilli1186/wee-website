---
name: Filters
heading: Add conditional template handler or data modifier
---

Wee's default filters include `is`, `not`, `isEmpty`, and `notEmpty`. Properties of the tag that is being filtered can be accessed via the current scope `this`. These include `val`, `data`, `root`, `tag`, `inner`, and `empty`.

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| name | string | -- | Filter name | ✔ |
| fn | [function](/script/#functions) | -- | Filter callback | ✔ |

---code|label:Boolean Response---

Returning true or false determines if the current tag pair should be parsed or skip to the next evaluation.

```javascript
Wee.view.addFilter('isNumber', function() {
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

```javascript
"I am 30 years old."
```

---code|label:Data Modification---

By modifying the value of `this.data` the remaining template parsing can be manipulated. The following extracts a range of data from a larger set of data.

```javascript
Wee.view.addFilter('range', function(offset, limit) {
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

**Note:** Both filters and helpers can take any number of parameters.