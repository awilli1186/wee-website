---
name: $is
heading: Determines if a particular element matches a specified criteria
---

---table---

| Variable | Type               | Default | Description                 | Required |
| -------- | ------------------ | ------- | --------------------------- | -------- |
| sel      | selector, element  | --      | Selector or element         | &#10003; |
| filter   | selector, callback | --      | Filter selector or callback | &#10003; |
| opt      | object             | --      | Callback arguments          |          |

---doc---

```html
<div class="element"></div>
```

---code|type:boolean---

```javascript
Wee.$is('.element', 'div');
```

```javascript
true
```