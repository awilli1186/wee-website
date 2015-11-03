---
name: Core
link: /script/core
---

---methods|modifier:bordered---

* [$(sel, context)](/script/core#sel)
* [$(sel).each(fn, options)](/script/core#each)
* [$(sel).map(fn, options)](/script/core#map)
* [$(sel).setRef()](/script/core#setref)
* [$(sel).setVar()](/script/core#setvar)

---code|label:Reverse---

The reverse method simply reverses the order of the selection results.

```javascript
$('.element').reverse();
```

---code|label:toArray---

Convert a Wee selection to a simple array

```javascript
$('.element').toArray();
```