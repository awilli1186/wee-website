---
name: $height
heading: Get or set the height of an element, optionally accounting for margin
variables:
- { var: "sel", desc: "Selector or element", type: "selector, element", req: true }
- { var: "val", desc: "Value to set or callback taking the element, index, and existing value", type: "string, integer, callback" }
---

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