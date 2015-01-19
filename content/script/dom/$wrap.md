---
name: $wrap
heading: Wrap HTML around specified element
---

---table---

| Variable | Type              | Default | Description                                   | Required |
| -------- | ----------------- | ------- | --------------------------------------------- | -------- |
| sel      | selector, element | --      | Selector or element                           | &#10003; |
| html     | string, callback  | --      | HTML or callback taking the element and index | &#10003; |

---doc---

```javascript
Wee.$wrap('.element', '<div></div>');
```

```javascript
Wee.$wrap('.element', function(el, i) {
    // Callback logic
});
```