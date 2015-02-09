---
name: DOM
---

---methods|modifier:bordered---

* [$(selector).addClass(val)](/script/dom#addclass)
* [$(selector).after(pos)](/script/dom#after)
* [$(selector).append(child)](/script/dom#append)
* [$(selector).appendTo(parent)](/script/dom#appendto)
* [$(selector).before(pos)](/script/dom#before)
* [$(selector).children(filter)](/script/dom#children)
* [$(selector).clone()](/script/dom#clone)
* [$(selector).closest(filter)](/script/dom#closest)
* [$(selector).contains(child)](/script/dom#contains)
* [$(selector).contents()](/script/dom#contents)
* [$(selector).css(a, b)](/script/dom#css)
* [$(selector).empty()](/script/dom#empty)
* [$(selector).filter(filter)](/script/dom#filter)
* [$(selector).find(filter)](/script/dom#find)
* [$(selector).hasClass(val)](/script/dom#hasclass)
* [$(selector).height(val)](/script/dom#height)
* [$(selector).hide()](/script/dom#hide)
* [$(selector).index()](/script/dom#index)
* [$(selector).insertAfter(sel)](/script/dom#insertafter)
* [$(selector).insertBefore(sel)](/script/dom#insertbefore)
* [$(selector).is(filter)](/script/dom#is)
* [$(selector).last()](/script/dom#last)
* [$(selector).next()](/script/dom#next)
* [$(selector).not(filter)](/script/dom#not)
* [$(selector).offset()](/script/dom#offset)
* [$(selector).parent()](/script/dom#parent)
* [$(selector).parents(filter)](/script/dom#parents)
* [$(selector).position()](/script/dom#position)
* [$(selector).prepend(child)](/script/dom#prepend)
* [$(selector).prependTo(parent)](/script/dom#prependto)
* [$(selector).prev()](/script/dom#prev)
* [$(selector).prop(key, val)](/script/dom#prop)
* [$(selector).remove()](/script/dom#remove)
* [$(selector).removeAttr(key)](/script/dom#removeattr)
* [$(selector).removeClass(val)](/script/dom#removeclass)
* [$(selector).replaceWith(sel)](/script/dom#replacewith)
* [$(selector).scrollTop(val)](/script/dom#scrolltop)
* [$(selector).serialize(val)](/script/dom#serialize)
* [$(selector).show()](/script/dom#show)
* [$(selector).siblings(filter)](/script/dom#siblings)
* [$(selector).slice(start, end)](/script/dom#slice)
* [$(selector).text(val)](/script/dom#text)
* [$(selector).toggle()](/script/dom#toggle)
* [$(selector).toggleClass(val, toggle)](/script/dom#toggleclass)
* [$(selector).val(val)](/script/dom#val)
* [$(selector).width(val)](/script/dom#width)
* [$(selector).wrap(html)](/script/dom#wrap)
* [$(selector).wrapInner(html)](/script/dom#wraptnner)

---doc---

DOM traversal is made easy with chaining.

---code---

```html
<ul>
	<li>One</li>
	<li>Two</li>
	<li>Three</li>
</ul>
```

---code|modifier:split---

```javascript
$('li').eq(1).text();
```

```javascript
Two
```