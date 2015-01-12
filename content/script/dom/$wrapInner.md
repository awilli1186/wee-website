---
name: $wrapInner
heading: Wrap HTML around the content of specified element
variables:
  - { var: "sel", desc: "Selector or element", type: "selector, element", req: true }
  - { var: "html", desc: "HTML or callback taking the element and index", type: "string, callback", req: true }
---

```javascript
Wee.$wrapInner('.element', '<p></p>');
```

```javascript
Wee.$wrapInner('.element', function(el, i) {
    // Callback logic
});
```