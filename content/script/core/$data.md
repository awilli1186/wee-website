---
name: $data
heading: Get data value of first element or set matched elements data with specified value
variables:
  - { var: "sel", desc: "Selector or element", type: "selector, element", req: true }
  - { var: "a", desc: "Data attribute to get or set or an object", type: "string", req: true }
  - { var: "b", desc: "Value to assign to data attribute", type: "string" }
---

```html
<div class="element" data-id="350"></div>
```

---code|label:Get---

```javascript
Wee.$data('.element', 'id');
```

```javascript
350
```

---doc|label:Set---

```javascript
Wee.$data('.element', 'id', '100');
```