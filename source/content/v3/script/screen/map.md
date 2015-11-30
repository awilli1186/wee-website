---
name: Map
heading: Watch single or set of screen events with specified options
---

---variables|class:table--variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| sets | object, array | -- | Object parameters below | ✔ |

---variables|class:table--variables|label:Set Object---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| args | array | -- | Callback arguments ||
| callback | [function](/script/#functions) | -- | Matching callback | ✔ |
| init | boolean | true | Immediately evaluate breakpoint logic ||
| max | number | -- | Maximum breakpoint value ||
| min | number | -- | Minimum breakpoint value ||
| once | boolean | false | Disable callback after first execution ||
| scope | object | -- | Callback scope ||
| size | number | -- | Specific breakpoint value ||
| watch | boolean | true | Evaluate on screen resize ||

---doc---

You can setup as many breakpoint sets as you need. They are added to a global window resize event that evaluates against all stored rules.

---code|label:Single---

```javascript
Wee.screen.map({
	size: 4,
	callback: function(obj) {
		console.log(obj);
	}
});
```

---doc---

An object with the direction, size, previous size, and init status is passed as the first callback argument.

---variables|class:table--response---

| Variable | Type | Description |
| -- | -- | -- |
| dir | number | 1 if sized up, 0 if sized down |
| size | number | 1-6 representing current value |
| prev | number | 1-6 representing previous value |
| init | boolean | true if run initially, else false |

---code|label:Multiple---

```javascript
Wee.screen.map([
	{
		size: 1,
		callback: [
			'common:mobile',
			'common:smallScreen'
		]
	},
	{
		min: 3,
		max: 4,
		watch: false,
		callback: 'common:mediumScreen'
	},
	{
		min: 5,
		args: ['passThrough'],
		callback: function(obj, val) {
			console.log(val); // passThrough
			console.log(obj);
		}
	}
]);
```