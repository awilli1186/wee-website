---
name: $html
heading: Get HTML value of first element or set matched elements HTML with specified value
---

---table---

| Variable | Type              | Default | Description                                                   | Required |
| -------- | ----------------- | ------- | ------------------------------------------------------------- | -------- |
| sel      | selector, element | --      | Selector or element                                           | &#10003; |
| val      | string, callback  | --      | HTML or callback taking the element, index, and existing HTML |          |

---doc---

```html
<div class="element"><h1>Heading</h1></div>
```

---code|label:Get---

```javascript
Wee.$html('.element');
```

```html
<h1>Heading</h1>
```

---doc|label:Set---

```javascript
Wee.$html('.element', '<h1>New Heading</h1>');
```