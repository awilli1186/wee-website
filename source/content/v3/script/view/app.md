---
name: App
heading: Create dynamic data-driven interfaces
---

---variables|label:Make---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| name | string | -- | Application name | ✔ |
| options | object | -- | Object properties below | ✔ |

---variables|label:Options Object---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| model | object | -- | Data object to bind to view | ✔ |
| target | [selection](/script#selection) | -- | If view isn't a selection the DOM target ||
| view | [selection](/script#selection), string | -- | The DOM view or a view string/reference | ✔ |

---code---

Applications are the glue between the [renderer](#render) and [observables](/script/core#observe).

```javascript
Wee.app.make('todo', {
	view: 'ref:todo',
	model: {
		todo: [
			{
				label: 'Download and run Wee',
				done: true
			},
			{
				label: 'Explore the guide and welcome modules'
			},
			{
				label: 'Reset your project to a blank slate'
			},
			{
				label: 'Customize wee.json'
			},
			{
				label: 'Build something incredible'
			}
		]
	}
});
```