---
name: $text
heading: Get text value of specified element or set text with specified value
---

---table---

| Variable | Type              | Default | Description                                                   | Required |
| -------- | ----------------- | ------- | ------------------------------------------------------------- | -------- |
| sel      | selector, element | --      | Selector or element                                           | &#10003; |
| val      | string, callback  | --      | Text or callback taking the element, index, and existing text | &#10003; |

---doc---

```javascript
var $text = Wee.$text('.element');
```

```javascript
Wee.$text('.element', function(el, i, el.innerText) {
    // Callback logic
});
```