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
| model | object | {} | Data object to bind to view ||
| target | [selection](/script#selection) | -- | If view isn't a selection the DOM target ||
| view | [selection](/script#selection), string | -- | The DOM view or a view string/reference | ✔ |

---doc---

Applications are the glue between the [renderer](#render) and [observables](/script/core#observe).
Updating properties in an app's data model triggers the view to update the DOM with the associated
changes allowing for complex, data-bound interfaces.

---code|label:Create View---

```html
// js/views/load/todo.html
{{ #! }}
<ul class="todo">
	{{ #todo|each }}
		<li class="todo__item{{ #done }} -is-done{{ /done }}">
			<div class="todo__toggle" data-ref="toggle" data-id="{{ # }}"></div>
			<span class="todo__label">{{ label }}</span>
		</li>
	{{ /todo }}
</ul>
{{ /! }}
```

---note---

**Note:** Adding HTML view files into the `js/views/load` directory will automatically add the view into Wee's data store when the build process is run. These auto-loaded views can be accessed directly when creating an app. Module views adhere to the same structure but are prefixed with "moduleName." when referenced.

---code|label:Create App---

```javascript
Wee.app.make('todo', {
	target: 'ref:todo', // DOM target to render app into
	view: 'todo', // String or loaded view file target
	model: [
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
});
```

---note---

**Note:** Since applications are a type of controller, all the standard scoped controller methods are available as properties on the app.

---code|label:Update App Data Model---

```javascript
// Add new property to app model
Wee.app.todo.$set('newProperty', 'data-binding at work');

// Add new item to end of the todo list
Wee.app.todo.$push({
	label: 'Add something dynamic'
});
```

---doc---

There are 2 additional methods available specifically to app instances, `$pause` and `$resume`. These allow for selectively enabling and disabling the actual rendering of any model changes to the DOM. When resuming you can opt to have the app render with any model updates made since the pause.

```javascript
Wee.app.todo.$pause(); 
```

---variables|label:Resume---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| update | boolean | false | Render app immediately ||

```javascript
Wee.app.todo.$resume(true); 
```