---
name: Animate
link: /script/animate
---

---methods|modifier:bordered---

* [$(sel).tween(values, options)](/script/animate#tween)

---code---

In this example, the target is faded out to full transparency.

```javascript
$('ref:element').tween({
	opacity: 0
}, {
	duration: 600
});
```