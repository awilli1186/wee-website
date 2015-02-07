---
name: $val
heading: Get value of specified element or set specified value
---

---variables---

| Variable | Type              | Default | Description                                                            | Required |
| -------- | ----------------- | ------- | ---------------------------------------------------------------------- | -------- |
| sel      | selector, element | --      | Selector or element                                                    | &#10003; |
| val      | string, callback  | --      | Value to set or callback taking the element, index, and existing value |          |

---doc|label:Get---

```javascript
var $val = Wee.$val('input');
```

---doc|label:Set---

```javascript
Wee.$val('input', 'Input value');
```

```javascript
Wee.$val('input', function(el, i, el.value) {
    // Callback logic
});
```