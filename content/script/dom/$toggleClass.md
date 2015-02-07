---
name: $toggleClass
heading: Toggle the display of a specified element
---

---variables---

| Variable | Type              | Default | Description                                                                  | Required |
| -------- | ----------------- | ------- | ---------------------------------------------------------------------------- | -------- |
| sel      | selector, element | --      | Selector or element                                                          | &#10003; |
| val      | string, callback  | --      | Class name(s) or callback taking the element, index, and existing class name | &#10003; |
| toggle   | boolean           | --      | Force switch                                                                 |          |

---doc---

```javascript
Wee.$toggleClass('.element', 'class-name');
```

```javascript
Wee.$toggleClass('.element', function(el, i, el.className) {
    // Callback logic
});
```