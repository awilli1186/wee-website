---
name: $width
heading: Get or set the width of a specified element, optionally accounting for margin
variables:
  - { var: "sel", desc: "Selector or element", type: "selector, element", req: true }
  - { var: "val", desc: "Value to set or callback taking the element, index, and existing value", type: "string, integer, callback" }
---

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