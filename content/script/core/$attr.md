---
name: $attr
heading: Get attribute of first matching selection or set attribute of each matching selection
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| target | [selection](/script#selection) | -- | Target selection | ✓ |
| a | string, object | -- | Attribute to get or set or an object | ✓ |
| b | [function](/script/#functions), string | -- | Value to assign to attribute ||


---code|type:string|modifier:split|label:Get---

```javascript
Wee.$attr('ref:element', 'href');
```

```javascript
"https://www.weepower.com"
```

---code|label:Single---

```javascript
Wee.$attr('ref:element', 'href', 'https://www.weepower.com/start');
```

---code|label:Multiple---

```javascript
Wee.$attr('ref:element', {
	href: 'https://developer.mozilla.org',
	target: '_blank'
});
```