---
name: $data
heading: Get data value of first element or set matched elements data with specified value
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| sel | selection | -- | [Wee selection](/script/core#core) | &#10003; |
| a | string, object | -- | Data attribute to get or set or an object | &#10003; |
| b | string | -- | Value to assign to data attribute ||

---code|label:Get---

```html
<div data-ref="element" data-id="150"></div>
```

---code|type:string|modifier:split---

```javascript
Wee.$data('ref:element', 'id');
```

```javascript
"150"
```

---code|label:Set Single---

```javascript
Wee.$data('ref:element', 'id', '250');
```

---code|label:Set Multiple---

```javascript
Wee.$data('ref:element', {
	id: '350',
	active: 'true'
});
```