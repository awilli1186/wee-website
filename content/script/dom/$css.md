---
name: $css
heading: Get CSS value of first matching selection or set value of each matching selection
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| target | [selection](/script#selection) | -- | Target selection | ✓ |
| a | string, object | -- | Property to get or set or an object | ✓ |
| b | string | -- | Value to assign to property ||

---code|type:string|modifier:split|label:Get---

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

---code|label:Set Multiple---

```javascript
Wee.$css('ref:element', {
	marginTop: '5px',
	color: 'red'
});
```