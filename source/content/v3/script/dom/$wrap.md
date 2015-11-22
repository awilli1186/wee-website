---
name: $wrap
heading: Wrap markup around each matching selection
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| target | [selection](/script#selection) | -- | Target selection | ✔ |
| html | [function](/script/#functions), string | -- | Wrapper HTML or callback | ✔ |

---code|label:Markup---

```javascript
Wee.$wrap('ref:element', '<div class="wrapper"></div>');
```

---code|modifier:stacked|label:Function---

The current index is injected into the callback. The scope of `this` is the element.

```html
<div class="library">
	<ul class="books programming">
		<li>Javascript: The Definitive Guide</li>
		<li>Mastering Regular Expressions</li>
	</ul>
	<ul class="books technique">
		<li>Code Complete</li>
		<li>The Pragmatic Programmer</li>
	</ul>
</div>
```

```javascript
Wee.$wrap('.books', function(i) {
	if (Wee.$hasClass($(this), 'programming')) {
		return '<div class="reference"></div>'
	} else {
		return '<div class="readers"></div>'
	}
});
```

```html
<div class="library">
	<div class="reference">
		<ul class="books programming">
			<li>Javascript: The Definitive Guide</li>
			<li>Mastering Regular Expressions</li>
		</ul>
	</div>
	<div class="readers">
		<ul class="books technique">
			<li>Code Complete</li>
			<li>The Pragmatic Programmer</li>
		</ul>
	</div>
</div>
```