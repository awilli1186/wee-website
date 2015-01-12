---
name: $text
heading: Get text value of specified element or set text with specified value
variables:
  - { var: "sel", desc: "Selector or element", type: "selector, element", req: true }
  - { var: "val", desc: "Text or callback taking the element, index, and existing text", type: "string, callback", req: true }
---

```javascript
var $text = Wee.$text('.element');
```

```javascript
Wee.$text('.element', function(el, i, el.innerText) {
    // Callback logic
});
```