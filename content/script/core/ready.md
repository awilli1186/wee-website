---
name: Ready
heading: Execute specified function when document is ready
variables:
  - { var: "fn", desc: "Callback option", type: "callback", req: true }
---

---doc|label:Callback---

```javascript
Wee.ready(function() {
	// Document ready logic
});
```

---doc|label:Wee:fn array---

```javascript
Wee.ready([
	'fn:function',
	'fn:function2'
]);
```