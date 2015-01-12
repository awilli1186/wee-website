---
name: $prepend
heading: Prepend specified child element to specified parent element
variables:
  - { var: "sel", desc: "Parent element", type: "selector, element", req: true }
  - { var: "child", desc: "Child element or callback taking the element, index, and existing HTML", type: "selector, element, callback", req: true }
---

```javascript
Wee.$prepend('.parent', '.child');
```

```javascript
Wee.$prepend('.parent', function(el, i, el.innerHTML) {
    // Callback logic
});
```