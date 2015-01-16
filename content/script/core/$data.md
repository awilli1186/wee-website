---
name: $data
heading: Get data value of first element or set matched elements data with specified value
---

---table---

| Variable | Type              | Default | Description                               | Required |
| -------- | ----------------- | ------- | ----------------------------------------- | -------- |
| sel      | selector, element | --      | Selector or element                       | &#10003; |
| a        | string            | --      | Data attribute to get or set or an object | &#10003; |
| b        | string            | --      | Value to assign to data attribute         |          |

---doc---

```html
<div class="element" data-id="350"></div>
```

---code|label:Get---

```javascript
Wee.$data('.element', 'id');
```

```javascript
350
```

---doc|label:Set---

```javascript
Wee.$data('.element', 'id', '100');
```