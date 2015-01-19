---
name: $prepend
heading: Prepend specified child element to specified parent element
---

---table---

| Variable | Type                        | Default | Description                                                            | Required |
| -------- | --------------------------- | ------- | ---------------------------------------------------------------------- | -------- |
| sel      | selector, element           | --      | Parent element                                                         | &#10003; |
| child    | selector, element, callback | --      | Child element or callback taking the element, index, and existing HTML | &#10003; |

---doc---

```javascript
Wee.$prepend('.parent', '.child');
```

```javascript
Wee.$prepend('.parent', function(el, i, el.innerHTML) {
    // Callback logic
});
```