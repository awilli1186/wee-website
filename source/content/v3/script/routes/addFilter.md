---
name: addFilter
heading: Add conditional route filter
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| a | object, string | -- | Multiple filter object or filter key | ✔ |
| b | function | -- | Filter function ||

---code|label:Single---

```javascript
Wee.routes.addFilter('isInternal', function(seg) {
	return ['admin', 'protected'].indexOf(seg) > -1;
});
```

---code|label:Multiple---

```javascript
Wee.routes.addFilter({
	isInternal: function(seg) {
		return ['admin', 'protected'].indexOf(seg) > -1;
	},
	isExternal: function(seg) {
		return ['admin', 'protected'].indexOf(seg) < 0;
	}
});