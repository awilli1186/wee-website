---
name: Bind
heading: Bind element events and form submit events to PJAX
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| events | object | -- | {event: selector} object to bind | ✔ |
| a | object, [selection](/script#selection) | -- | Context or same options available to [go method](#go) ||
| context | [selection](/script#selection) | document | Context selection ||

---code|label:Basic---

```javascript
Wee.history.bind({
	click: 'a',
	submit: '.element'
});
```

---code|label:Advanced---

```javascript
Wee.history.bind({
		click: 'a:not([data-static])'
	},
	'ref:element',
	{
		extensions: [
			'html',
			'php',
		],
		partials: 'title, .js-sidebar, ref:inner',
		request: {
			root: '/pjax',
			success: function() {
				ga('send', 'pageview');
			}
		}
	}
});
```