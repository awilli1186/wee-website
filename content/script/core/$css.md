---
name: $css
heading: Get CSS value of first element or set matched elements CSS property with specified value
---

---table---

| Variable | Type              | Default | Description                              | Required |
| -------- | ----------------- | ------- | ---------------------------------------- | -------- |
| sel      | selector, element | --      | Selector or element                      | &#10003; |
| a        | string, object    | --      | CSS property or {property: value} object | &#10003; |
| b        | string, callback  | --      | CSS value or callback                    | &#10003; |

---doc|label:Single---

```javascript
Wee.$css('.element', 'marginTop', '5px');
```

---doc|label:Multiple---

```javascript
Wee.$css('.element', {
	'marginTop': '5px',
	'color': 'red'
});
```