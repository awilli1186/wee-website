---
name: $wrapInner
heading: Wrap markup around the content of each matching selection
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| target | [selection](/script#selection) | -- | Target selection | ✔ |
| html | [function](/script/#functions), string | -- | Wrapper HTML or callback | ✔ |

---code|label:Markup---

```javascript
Wee.$wrapInner('ref:element', '<div class="wrapper"></div>');
```

---code|label:Function---

The current index is injected into the callback. The scope of ```this``` is the element.

```html
<ul class="names">
	<li class="boss">Jane Doe</li>
	<li>John Doe</li>
</ul>
````

---code|modifier:split---

```javascript
Wee.$wrapInner('.names li', function(i) {
	// Wrap bosses in bold tag
	if (Wee.$hasClass($(this), 'boss')) {
		return '<b></b>';
	}
});
```

```html
<ul class="names">
	<li class="boss"><b>Jane Doe</b></li>
	<li>John Doe</li>
</ul>
```