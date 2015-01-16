---
name: Request
heading: Make Ajax request based on specified options
---

---table---

| Variable | Type   | Default | Description           | Required |
| -------- | ------ | ------- | --------------------- | -------- |
| opt      | object | --      | Request options below | &#10003; |

---table---

| Variable | Type            | Default | Description                                                  | Required |
| -------- | --------------- | ------- | ------------------------------------------------------------ | -------- |
| url      | string          | --      | URL endpoint to request                                      | &#10003; |
| method   | string          | get     | Request verb (get, post, put, etc)                           |          |
| data     | object          | --      | Object to serialize and pass along with request              |          |
| success  | callback        | --      | Callback if request succeeds                                 |          |
| failure  | callback        | --      | Callback if request fails                                    |          |
| json     | boolean         | false   | Evaluate the response as JSON                                |          |
| jsonp    | boolean, string | --      | Boolean or override name for callback query string parameter |          |
| args     | array           | --      | Callback arguments                                           |          |
| scope    | object          | --      | Callback scope                                               |          |
| template | string          | --      | Template string to parse response JSON into                  |          |
| headers  | object          | --      | Object to set request headers (Options below)                |          |

---table---

| Variable | Type    | Default | Description     | Required |
| -------- | ------- | ------- | --------------- | -------- |
| name     | string  | --      | Name of header  |          |
| value    | string  | --      | Value of header |          |
| merge    | boolean | --      | Clear header    |          |

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