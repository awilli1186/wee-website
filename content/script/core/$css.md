---
name: $css
heading: Get CSS value of first element or set matched elements CSS property with specified value
variables:
  - { var: "sel", desc: "Selector or element", type: "selector, element", req: true }
  - { var: "a", desc: "CSS property or {property: value} object", type: "string, object", req: true }
  - { var: "b", desc: "CSS value", type: "string" }
---

---doc|label:Single---

```javascript
Wee.$css('.element', 'marginTop', '5px');
```

---doc|label:Multiple---

```javascript
Wee.$css('.element', {
	'marginTop': '5px',
	'color': 'red'
});
```