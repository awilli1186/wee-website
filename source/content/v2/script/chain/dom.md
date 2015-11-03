---
name: DOM
link: /script/dom
---

---methods|modifier:bordered---

* [$(sel).addClass(value)](/script/dom#addclass)
* [$(sel).after(source, remove)](/script/dom#after)
* [$(sel).append(source)](/script/dom#append)
* [$(sel).appendTo(target)](/script/dom#appendto)
* [$(sel).attr(a, b)](/script/core#attr)
* [$(sel).before(source, remove)](/script/dom#before)
* [$(sel).children(filter)](/script/dom#children)
* [$(sel).clone()](/script/dom#clone)
* [$(sel).closest(filter)](/script/dom#closest)
* [$(sel).contains(descendant)](/script/dom#contains)
* [$(sel).contents()](/script/dom#contents)
* [$(sel).css(a, b)](/script/dom#css)
* [$(sel).data(a, b)](/script/core#data)
* [$(sel).empty()](/script/dom#empty)
* [$(sel).eq(index)](/script/core#eq)
* [$(sel).filter(filter)](/script/dom#filter)
* [$(sel).find(filter)](/script/dom#find)
* [$(sel).first()](/script/core#first)
* [$(sel).get(index)](/script/core#eq)
* [$(sel).hasClass(value)](/script/dom#hasclass)
* [$(sel).height(value)](/script/dom#height)
* [$(sel).hide()](/script/dom#hide)
* [$(sel).html(value)](/script/dom#html)
* [$(sel).index()](/script/dom#index)
* [$(sel).insertAfter(source)](/script/dom#insertafter)
* [$(sel).insertBefore(source)](/script/dom#insertbefore)
* [$(sel).is(filter, options)](/script/dom#is)
* [$(sel).last(context)](/script/dom#last)
* [$(sel).next(filter, options)](/script/dom#next)
* [$(sel).not(filter, options)](/script/dom#not)
* [$(sel).offset(value)](/script/dom#offset)
* [$(sel).parent(filter)](/script/dom#parent)
* [$(sel).parents(filter)](/script/dom#parents)
* [$(sel).position()](/script/dom#position)
* [$(sel).prepend(source)](/script/dom#prepend)
* [$(sel).prependTo(target)](/script/dom#prependto)
* [$(sel).prev(filter, options)](/script/dom#prev)
* [$(sel).prop(a, b)](/script/dom#prop)
* [$(sel).remove(context)](/script/dom#remove)
* [$(sel).removeAttr(name)](/script/dom#removeattr)
* [$(sel).removeClass(value)](/script/dom#removeclass)
* [$(sel).replaceWith(source)](/script/dom#replacewith)
* [$(sel).scrollLeft(value)](/script/dom#scrollleft)
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
* [$(sel).wrapInner(html)](/script/dom#wrapinner)

---code|label:Add---

You can join selections using the add method.

```javascript
$('.element').add('ref:selection').hide();
```

---code|label:Example---

DOM traversal is made easy with chaining.

```markup
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