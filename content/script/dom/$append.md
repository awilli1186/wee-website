---
name: $append
heading: Append specified child element to parent element
variables:
  - { var: "sel", desc: "Parent element", type: "selector, element", req: true }
  - { var: "child", desc: "Child element or callback taking the element, index, and existing HTML", type: "selector, element, callback", req: true }
---

```javascript
Wee.$append('.parent', '.child');
```

```javascript
Wee.$append('.element', function(el, i, el.innerHTML) {
    // Callback logic
});
```