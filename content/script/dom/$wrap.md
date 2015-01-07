---
name: $wrap
heading: Wrap HTML around specified element
variables:
  - { var: "sel", desc: "Selector or element", type: "selector, element", req: true }
  - { var: "html", desc: "HTML or a callback function taking the element and index", type: "string, callback", req: true }
---

---code---

```javascript
Wee.$wrap('.element', '<div class="container"></div>');
```

```html
<div class="container">
    <div class="element"></div>
</div>
```