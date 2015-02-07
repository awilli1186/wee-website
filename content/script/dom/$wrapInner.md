---
name: $wrapInner
heading: Wrap HTML around the content of specified element
---

---variables---

| Variable | Type              | Default | Description                                   | Required |
| -------- | ----------------- | ------- | --------------------------------------------- | -------- |
| sel      | selector, element | --      | Selector or element                           | &#10003; |
| html     | string, callback  | --      | HTML or callback taking the element and index | &#10003; |

---doc---

```javascript
Wee.$wrapInner('.element', '<p></p>');
```

```javascript
Wee.$wrapInner('.element', function(el, i) {
    // Callback logic
});
```