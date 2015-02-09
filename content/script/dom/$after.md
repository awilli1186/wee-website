---
name: $after
heading: Insert specified element after specified element
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| sel | selection | -- | [Wee selection](/script/core#core) | &#10003; |
| pos      | selector, element, callback | --      | Target element or callback taking the element, index, and existing HTML | &#10003; |
| rem      | boolean                     | false   | Remove target after target insertion                                    |          |

---doc|modifier:split---

```javascript
Wee.$after('.first', '.second');
```

```javascript
Wee.$after('.element', function(el, i, el.innerHTML) {
    // Callback logic
});
```