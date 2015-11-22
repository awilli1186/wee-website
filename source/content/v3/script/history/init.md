---
name: Init
heading: Set the initial state and popstate event, and bind global actions
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| options | object | -- | Object properties below ||

---variables|label:Options Object---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| bind | object | -- | [Bind object format](#bind) ||
| extensions | array | -- | Whitelist of path extensions to support ||
| partials | [selection](/script#selection) | 'title, main' | Elements to replace from response ||
| push | boolean | true | Push the path to the browser URL ||
| request | object | -- | Pass-through object to [Wee.data](/script/data#request) ||
| run | boolean | true | Evaluate routing rules ||

---code|label:Default---

```javascript
Wee.history.init();
```

---code|label:Advanced---

```javascript
Wee.history.init({
	bind: {
		click: 'a:not([data-static])'
	},
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
});
```

---code|modifier:stacked|label:Lifecycle---

The following events are available in this order at different stages throughout the History lifecycle. 

```javascript
options.begin(config); // return false to abort process
```

```javascript
options.replace(html);
```

```javascript
options.request.send();
```

```javascript
options.request.success(xhr);
```

```javascript
options.request.error(xhr);
```

```javascript
options.request.complete(xhr);
```

```javascript
options.pushstate({
	dir: [-1, 1],
	path: 'string',
	prev: 'string'
});
```

```javascript
options.popstate({
	dir: [-1, 1],
	path: 'string',
	prev: 'string'
});
```

```javascript
options.complete({
	dir: [-1, 1],
	path: 'string',
	prev: 'string'
});
```