---
name: Request
heading: Make Ajax request based on specified options
variables:
  - { var: "opt", desc: "Request options below", type: "object", req: true }
options:
  - { var: "url", desc: "URL endpoint to request", type: "string", req: true }
  - { var: "method", desc: "Request verb (get, post, put, etc)", type: "string", default: "get" }
  - { var: "data", desc: "Object to serialize and pass along with request", type: "object" }
  - { var: "success", desc: "Callback if request succeeds", type: "callback" }
  - { var: "failure", desc: "Callback if request fails", type: "callback" }
  - { var: "json", desc: "Evaluate the response as JSON",type: "boolean", default: "false"}
  - { var: "jsonp", desc: "Boolean or override name for callback query string parameter", type: "boolean, string" }
  - { var: "args", desc: "Callback arguments", type: "array" }
  - { var: "scope", desc: "Callback scope",type: "object"}
  - { var: "template", desc: "Template string to parse response JSON into",type: "string"}
  - { var: "headers", desc: "Object to set request headers", type: "object" }
  - { var: "name", desc: "Name of header", type: "string" }
  - { var: "value", desc: "Value of header", type: "string" }
  - { var: "merge", desc: "Clear header", type: "boolean" }
---

---doc|label:Get---

```javascript
Wee.data.request({
	url: '/path/to/file.json',
	success: function(data) {
		// Success logic
	}
});
```

---doc|label:Get & Parse---

Retrieve JSON and immediately [parse it](#parse) into a template. No need to set the json parameter to true, it's assumed.

```javascript
{
	person: {
		firstName: 'Don',
		lastName: 'Draper'
	}
}
```

---code---

```javascript
Wee.data.request({
	url: '/path/to/file.json',
	template: 'Hey person.firstName || Guest',
	success: function(parsed, raw) {
		console.log(parsed);
		console.log(raw);
	}
});
```

```javascript
Hey Don
{json}
```

---doc|label:Post w/ Data---

```javascript
Wee.data.request({
	url: '/account/login.php',
	method: 'post',
	data: {
		username: 'user@domain.com',
		password: 'secret'
	},
	success: function(data) {
		// Success logic
	}
});
```