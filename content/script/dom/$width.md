---
name: $width
heading: Get or set the width of a specified element, optionally accounting for margin
---

---table---

| Variable | Type                      | Default | Description                                                            | Required |
| -------- | ------------------------- | ------- | ---------------------------------------------------------------------- | -------- |
| sel      | selector, element         | --      | Selector or element                                                    | &#10003; |
| val      | string, integer, callback | --      | Value to set or callback taking the element, index, and existing value |          |

---code|label:Get---

```javascript
Wee.$width('.element');
```

```javascript
100
```

---doc|label:Set---

```javascript
Wee.$width('.element', '200px');
```

```javascript
Wee.$width('.element', function(el, i, width) {
    // Callback logic
});
```