---
name: DOM
---

In this example, the selector takes the place of the method's first
argument, and the second argument is passed in as the first.

```javascript
$('.another-element').insertAfter('.element');
```

DOM traversal is made easy with chaining.

```html
<ul>
	<li class="first"></li>
	<li class="second"></li>
	<li class="last"></li>
</ul>
```

---code---

```javascript
$('.last').prev();
```

```html
<li class="second"></li>
```