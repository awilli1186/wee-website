---
name: Request
heading: Make Ajax request based on specified options
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| options | object | -- | Request options below | ✔ |

---variables|label:Options Object---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| args | array | -- | Callback arguments appended after default parameters ||
| data | object | -- | Object to serialize and pass along with request ||
| error | [function](/script/#functions) | -- | Failure callback ||
| headers | object | -- | {key: val} object of request headers ||
| json | boolean | false | Evaluate the response as JSON and return object ||
| jsonp | boolean, string | false | Boolean or override name for callback query string parameter ||
| jsonpCallback | string | -- | Override the name of the JSONP callback function ||
| method | string | get | Request verb (get, post, put, etc) in lowercase ||
| scope | object | -- | Callback scope ||
| success | [function](/script/#functions) | -- | Success callback ||
| url | string | -- | URL endpoint to request | ✔ |

---code|label:Get---

The callback receives the response as the first parameter followed by the XHR object. Any custom arguments provided are injected afterwards.

```javascript
Wee.data.request({
	url: '/samples/test.json',
	success: function(data, xhr) {
		console.log(data);
	}
});
```

---note---

**Note:** By default the X-Requested-With header is set to XMLHttpRequest. Also, when `json` is set to true the Content-Type header is set to 'application/json'. Either can be overridden or removed if set to false.

---code|label:Post w/ Data---

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
	error: function(data) {
    	console.log('Login failed');
    }
});
```

---code|label:JSONP---

JSONP is a technique for cross-domain requests that would otherwise be blocked because of the same-origin policy. Unless overridden Wee will send `callback` as the query string parameter to communicate to the server how to format the response.

```javascript
Wee.data.request({
	url: 'https://example.com/entry/465',
	jsonp: true,
	success: function(data) {
		console.log('Login succeeded');
	}
});
```

The request above will create a script reference in the head with the source set to `https://example.com/entry/465?callback=callback1`. If configured correctly the server will return a JSON object executed like the following.

```javascript
callback1({
	id: 465,
	name: "Lorem Ipsum",
	active: true
});
```

---note---

**Note:** The `jsonpCallback` parameter can be set to direct the callback to a pre-existing method instead of the generically registered success callback.