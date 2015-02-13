---
name: DOM
link: /script/dom
---

---methods|modifier:bordered---

* [$(sel).addClass(value)](/script/dom#addclass)
* [$(sel).after(source, remove)](/script/dom#after)
* [$(sel).append(source)](/script/dom#append)
* [$(sel).appendTo(target)](/script/dom#appendto)
* [$(sel).before(source, remove)](/script/dom#before)
* [$(sel).children(filter)](/script/dom#children)
* [$(sel).clone()](/script/dom#clone)
* [$(sel).closest(filter)](/script/dom#closest)
* [$(sel).contains(descendant)](/script/dom#contains)
* [$(sel).contents()](/script/dom#contents)
* [$(sel).css(a, b)](/script/dom#css)
* [$(sel).empty()](/script/dom#empty)
* [$(sel).filter(filter)](/script/dom#filter)
* [$(sel).find(filter)](/script/dom#find)
* [$(sel).hasClass(value)](/script/dom#hasclass)
* [$(sel).height(value)](/script/dom#height)
* [$(sel).hide()](/script/dom#hide)
* [$(sel).index()](/script/dom#index)
* [$(sel).insertAfter(source)](/script/dom#insertafter)
* [$(sel).insertBefore(source)](/script/dom#insertbefore)
* [$(sel).is(filter)](/script/dom#is)
* [$(sel).last()](/script/dom#last)
* [$(sel).next()](/script/dom#next)
* [$(sel).not(filter)](/script/dom#not)
* [$(sel).offset()](/script/dom#offset)
* [$(sel).parent()](/script/dom#parent)
* [$(sel).parents(filter)](/script/dom#parents)
* [$(sel).position()](/script/dom#position)
* [$(sel).prepend(source)](/script/dom#prepend)
* [$(sel).prependTo(target)](/script/dom#prependto)
* [$(sel).prev()](/script/dom#prev)
* [$(sel).prop(key, value)](/script/dom#prop)
* [$(sel).remove()](/script/dom#remove)
* [$(sel).removeAttr(key)](/script/dom#removeattr)
* [$(sel).removeClass(value)](/script/dom#removeclass)
* [$(sel).replaceWith(source)](/script/dom#replacewith)
* [$(sel).scrollTop(value)](/script/dom#scrolltop)
* [$(sel).serialize(value)](/script/dom#serializeform)
* [$(sel).show()](/script/dom#show)
* [$(sel).siblings(filter)](/script/dom#siblings)
* [$(sel).slice(start, end)](/script/dom#slice)
* [$(sel).text(value)](/script/dom#text)
* [$(sel).toggle()](/script/dom#toggle)
* [$(sel).toggleClass(className, state)](/script/dom#toggleclass)
* [$(sel).val(value)](/script/dom#val)
* [$(sel).width(value)](/script/dom#width)
* [$(sel).wrap(html)](/script/dom#wrap)
* [$(sel).wrapInner(html)](/script/dom#wraptnner)

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