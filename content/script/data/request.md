---
name: Request
heading: Make Ajax request based on specified options
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| opt | object | -- | Request options below | &#10003; |

---variables|label:Options Object---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| url | string | -- | URL endpoint to request | &#10003; |
| args | array | -- | Callback arguments ||
| data | object | -- | Object to serialize and pass along with request ||
| failure | function | -- | [Callback](/script/#functions) if request fails ||
| headers | object | -- | {key: val} object of request headers ||
| json | boolean | false | Evaluate the response as JSON ||
| jsonp | boolean, string | false | Boolean or override name for callback query string parameter ||
| method | string | get | Request verb (get, post, put, etc) in lowercase ||
| scope | object | -- | Callback scope ||
| success | callback | -- | [Callback](/script/#functions) if request succeeds ||
| template | string | -- | Template string to parse response JSON ||

---doc|label:Get---

The callback receives the response as the first parameter followed by the XHR object. Any custom arguments provided are injected afterwards.

```javascript
Wee.data.request({
	url: '/samples/test.json',
	success: function(data, xhr) {
		console.log(data);
	}
});
```

---doc|label:Get & Render---

Retrieve JSON and immediately [render](/script/view/#render) it into a template. No need to set the json parameter to true, it's assumed. A third callback parameter is injected with the raw JSON response. The [view](/script/view) script is required.

---code---

```javascript
{
	"person": {
		"firstName": "Don",
		"lastName": "Draper"
	}
}
```

---code|modifier:split---

```javascript
Wee.data.request({
	url: '/samples/test.json',
	template: 'Hey {{person.firstName||Guest}}',
	success: function(data, xhr, json) {
		console.log(data);
		console.log(json);
	}
});
```

```javascript
"Hey Don"
---
{
	"person": {
		"firstName": "Don",
		"lastName": "Draper"
	}
}
```

---doc|label:Post w/ Data---

```javascript
Wee.data.request({
	url: '/samples/login.php',
	method: 'post',
	data: {
		username: 'user@weepower.com',
		password: 'pass123'
	},
	success: function(data) {
		console.log('Login succeeded');
	},
	failure: function(data) {
    	console.log('Login failed');
    }
});
```

---note---

**Note:** By default the X-Requested-With header is set to XMLHttpRequest. It can be overriden or removed if set to false.