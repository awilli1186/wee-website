---
name: DOM
---

---methods---

* [$(selector).after()](/script/dom#after)
* [$(selector).append()](/script/dom#append)
* [$(selector).before()](/script/dom#before)
* [$(selector).children()](/script/dom#children)
* [$(selector).clone()](/script/dom#clone)
* [$(selector).closest()](/script/dom#closest)
* [$(selector).contains()](/script/dom#contains)
* [$(selector).contents()](/script/dom#contents)
* [$(selector).empty()](/script/dom#empty)
* [$(selector).filter()](/script/dom#filter)
* [$(selector).find()](/script/dom#find)
* [$(selector).height()](/script/dom#height)
* [$(selector).hide()](/script/dom#hide)
* [$(selector).index()](/script/dom#index)
* [$(selector).insertAfter()](/script/dom#insertafter)
* [$(selector).insertBefore()](/script/dom#insertbefore)
* [$(selector).is()](/script/dom#is)
* [$(selector).last()](/script/dom#last)
* [$(selector).next()](/script/dom#next)
* [$(selector).not()](/script/dom#not)
* [$(selector).offset()](/script/dom#offset)
* [$(selector).parent()](/script/dom#parent)
* [$(selector).parents()](/script/dom#parents)
* [$(selector).parseHTML()](/script/dom#parsehtml)
* [$(selector).position()](/script/dom#position)
* [$(selector).prepend()](/script/dom#prepend)
* [$(selector).prev()](/script/dom#prev)
* [$(selector).prop()](/script/dom#prop)
* [$(selector).remove()](/script/dom#remove)
* [$(selector).removeAttr()](/script/dom#removeattr)
* [$(selector).replaceWith()](/script/dom#replacewith)
* [$(selector).scrollTop()](/script/dom#scrolltop)
* [$(selector).show()](/script/dom#show)
* [$(selector).siblings()](/script/dom#siblings)
* [$(selector).slice()](/script/dom#slice)
* [$(selector).text()](/script/dom#text)
* [$(selector).toggle()](/script/dom#toggle)
* [$(selector).toggleClass()](/script/dom#toggleclass)
* [$(selector).val()](/script/dom#val)
* [$(selector).width()](/script/dom#width)
* [$(selector).wrap()](/script/dom#wrap)
* [$(selector).wrapInner()](/script/dom#wraptnner)

---doc---

In this example, the selector takes the place of the method's first argument, and the second argument is passed in as the first.

```javascript
$('.another-element').insertAfter('.element');
```

DOM traversal is made easy with chaining.

```html
<ul>
	<li>One</li>
	<li>Two</li>
	<li>Three</li>
</ul>
```

---code|modifier:split---

```javascript
$('li').first().next();
```

```javascript
Two
```