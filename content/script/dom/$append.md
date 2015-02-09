---
name: $append
heading: Append specified child element to parent element
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| sel | selection | -- | [Wee selection](/script/core#core) | &#10003; |
| child    | selector, element, callback | --      | Child element or callback taking the element, index, and existing HTML | &#10003; |

---doc|modifier:split---

```javascript
Wee.$append('.parent', '.child');
```

```javascript
Wee.$append('.element', function(el, i, el.innerHTML) {
    // Callback logic
});
```