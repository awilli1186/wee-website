---
name: $attr
heading: Get attribute of first element or set matched elements attribute with specified value
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| sel | selection | -- | [Wee selection](/script/core#core) | &#10003; |
| a | string, object | -- | Attribute to get or set or an object | &#10003; |
| b | string | -- | Value to assign to attribute ||

---code|label:Get---

```html
<a href="https://www.weepower.com" data-ref="element">Link</a>
```

---code|type:string|modifier:split---

```javascript
Wee.$attr('ref:element', 'href');
```

```javascript
"https://www.weepower.com"
```

---code|label:Set Single---

```javascript
Wee.$attr('ref:element', 'href', 'https://www.weepower.com/start');
```

---code|label:Set Multiple---

```javascript
Wee.$attr('ref:element', {
	href: 'https://developer.mozilla.org',
	target: '_blank'
});
```