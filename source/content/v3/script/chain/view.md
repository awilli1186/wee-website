---
name: View
link: /script/view
---

---methods|modifier:bordered---

* [$(sel).render(data)](/script/view#render)

---code|modifier:stacked---

The view chain method updated the content of a DOM element given a data object.

```html
<div class="element">
	{{ #! }}<span class="{{ className }}">{{ content }}</span>{{ /! }}
</div>
```

```javascript
$('.element').render({
	className: 'dynamic-class',
	content: 'Span contents'
});
```