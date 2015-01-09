---
name: $html
heading: Get HTML value of first element or set matched elements HTML with specified value
variables:
  - { var: "sel", desc: "Selector or element", type: "selector, element", req: true }
  - { var: "val", desc: "HTML or callback taking the element, index, and existing HTML", type: "string, callback" }
---

```html
<div class="element"><h1>Heading</h1></div>
```

---code|label:Get---

```javascript
Wee.$html('.element');
```

```html
<h1>Heading</h1>
```

---doc|label:Set---

```javascript
Wee.$html('.element', '<h1>New Heading</h1>');
```