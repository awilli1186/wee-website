---
name: $data
heading: Get data of first matching selection or set data of each matching selection
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| target | [selection](/script#selection) | -- | Target selection | ✓ |
| a | string, object | -- | Data attribute to get or set or an object | ✓ |
| b | string | -- | Value to assign to data attribute ||

---code|label:Get All---

```html
<div data-ref="element" data-id="150"></div>
```

---code|type:string|modifier:split---

```javascript
Wee.$data('ref:element');
```

```javascript
{
	ref: "element",
	val: "test"
}
```

---code|label:Get Single---

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