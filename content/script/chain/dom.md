---
name: DOM
---

```javascript
$('.second').insertAfter('.first');
```

```html
<ul>
	<li></li>
	<li></li>
	<li class="last"></li>
</ul>
```

---code---

```javascript
$('.last').parent().children().last();
```

```html
<li class="last"></li>
```