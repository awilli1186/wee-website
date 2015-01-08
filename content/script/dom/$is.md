---
name: $is
heading: Determines if a particular element matches a specified criteria
variables:
  - { var: "sel", desc: "Selector or element", type: "selector, element", req: true }
  - { var: "filter", desc: "Filter selector", type: "selector", req: true }
  - { var: "opt", desc: "Callback arguments", type: "object" }
---

```html
<div class="element"></div>
```

---code---

```javascript
Wee.$is('.element', 'div');
```

```javascript
true
```