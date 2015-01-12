---
name: $val
heading: Get value of specified element or set specified value
variables:
  - { var: "sel", desc: "Selector or element", type: "selector, element", req: true }
  - { var: "val", desc: "Value to set or callback taking the element, index, and existing value", type: "string, callback" }
---

---doc|label:Get---

```javascript
var $val = Wee.$val('input');
```

---doc|label:Set---

```javascript
Wee.$val('input', 'Input value');
```

```javascript
Wee.$val('input', function(el, i, el.value) {
    // Callback logic
});
```