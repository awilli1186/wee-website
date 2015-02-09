---
name: $before
heading: Insert specified element before specified element
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| sel | selection | -- | [Wee selection](/script/core#core) | &#10003; |
| pos      | selector, element, callback | --      | Target element or callback taking the element, index, and existing HTML | &#10003; |
| rem      | boolean                     | false   | Remove target after target insertion                                    |          |

---doc|modifier:split---

```javascript
Wee.$before('.second', '.first');
```

```javascript
Wee.$before('.element', function(el, i, pos.innerHTML) {
    // Callback logic
});
```