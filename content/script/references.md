---
name: References
---

References are a distinctive approach of referencing DOM elements from your script. They bring added benefit of being cached when the page loads so they offer superior performance to standard selectors. Refs are more distinct than ```js-``` classes. Anywhere in Wee where you can pass a standard selector you can also pass a ```'ref:name'``` string.

---code|modifier:split---

```javascript
<div data-ref="element"></div>
```

```javascript
$('ref:element');
```

---doc---

If multiple refs are set with the same name they are pushed into an array an can be targetted with a single ref selection.

---code|modifier:split---

```javascript
<div data-ref="element"></div>
<div data-ref="element"></div>
```

```javascript
$('ref:element').on('click', function() {
	// Method logic
});
```

---note---

**Note:** If you add elements to the page dynamically you can call the Wee.$setRef() method.