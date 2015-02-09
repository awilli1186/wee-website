---
name: View
---

---methods|modifier:bordered---

* [$(selector).render(obj, opt)](/script/view#render)

---doc---

The view chain method updated the content of a DOM element given a data object.

---code|modifier:split---

```html
<div class="element">
	<span class="{{class}}">{{content}}</span>
</div>
```

```javascript
$('.element').render({
	class: 'dynamic-class',
	content: 'Span contents'
});
```