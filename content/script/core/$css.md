---
name: $css
heading: Get CSS value of first element or set matched elements CSS property with specified value
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| sel | selection | -- | [Wee selection](/script/core#core) | &#10003; |
| a | string, object | -- | Property to get or set or an object | &#10003; |
| b | string | -- | Value to assign to property ||

---code|label:Get---

```html
<div data-ref="element"></div>
```

---code|type:string|modifier:split---

```javascript
Wee.$css('ref:element', 'marginTop');
```

```javascript
"0px"
```

---code|label:Set Single---

```javascript
Wee.$css('ref:element', 'marginTop', '5px');
```

---doc|label:Set Multiple---

```javascript
Wee.$css('ref:element', {
	marginTop: '5px',
	color: 'red'
});
```