---
name: Map
heading: Add bindings to bound object with optional exec object and/or init boolean
variables:
  - { var: "evts", desc: "Events object", type: "object", req: true }
  - { var: "a", desc: "Event callback arguments or boolean to immediately bind the events", type: "object, boolean", default: "false" }
  - { var: "b", desc: "Immediately bind the events", type: "boolean", default: "false"}
variableNotes: Note that currently the callback arguments are only utilized when immediately binding the events. This will be resolved in a future release.
---

```html
<form data-bind="contactForm">
	<input type="text" name="name">
	<input type="email" name="email">
	<textarea name="message"></textarea>
	<input type="submit" value="Submit" data-bind="actionButton">
</form>
```

```javascript
Wee.events.map({
	'contactForm': {
		init: 'contact:init',
		submit: 'contact:validateData'
	},
	'actionButton': {
		click: function() {
			// Click logic
		}
	}
}, true);
```