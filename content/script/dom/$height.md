---
name: $height
heading: Get or set the height of an element, optionally accounting for margin
---

---table---

| Variable | Type                      | Default | Description                                                            | Required |
| -------- | ------------------------- | ------- | ---------------------------------------------------------------------- | -------- |
| sel      | selector, element         | --      | Selector or element                                                    | &#10003; |
| val      | string, integer, callback | --      | Value to set or callback taking the element, index, and existing value |          |

---code---

```javascript
Wee.$height('.element');
```

```javascript
100
```

---doc---

```javascript
Wee.$height('.element', function(el, i, height) {
	// Callback logic
});
```