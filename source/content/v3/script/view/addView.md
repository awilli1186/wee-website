---
name: addView
heading: Add views to store for on-demand reference
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| name | string | -- | View name | ✔ |
| value | string | -- | View value | ✔ |

---code---

```javascript
Wee.view.addView('copyright', '{{ #! }}<small>&copy; {{ year }}</small>{{ /! }}');
```

---code|type:string|modifier:split---

```javascript
var template = '{{ #! }}{{> copyright }}{{ /! }}',
	data = {
		year: 2015
	};

Wee.view.render(template, data);
```

```javascript
"<small>&copy; 2015</small>"
```

---code|modifier:stacked---

You can also add views to the store and then reference them when creating apps or rendering.

```javascript
Wee.view.addView('viewName', '{{ #! }}My name is {{ firstName }} {{ lastName }}{{ /! }}');
```

```javascript
Wee.view.render('viewName', {
	firstName: 'Don',
	lastName: 'Draper'
});
```

```javascript
Wee.app.make('appName', {
	view: 'viewName',
	model: {
		firstName: 'Don',
		lastName: 'Draper'
	}
});
```