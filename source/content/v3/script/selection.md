---
name: Selection
---

Wee accepts any browser-supported selection queries. Internally Wee parses the selection string to invoke the most efficient native selection method and returns an array of matching nodes.

---code|label:Examples---

```javascript
$('#id');
$('.class');
$('#id .class');
$('.class1, .class2');
$('.parent > .child');
```

---doc|label:References---

References are a distinctive approach to referencing DOM elements from your script. They bring added benefit of being cached when the page loads so they offer superior performance to standard selectors. Refs are more distinct than ```js-``` classes. Anywhere in Wee where you can pass a standard selector you can also pass a ```'ref:name'``` string.

---code|modifier:split---

```javascript
<div data-ref="element"></div>
```

```javascript
$('ref:element');
```

---doc---

If multiple refs are set with the same name they are pushed into an array an can be targeted with a single ref selection. You can also set multiple ref values separated with spaces.

---code|modifier:split---

```javascript
<div data-ref="element"></div>
<div data-ref="element element2"></div>
```

```javascript
$('ref:element').on('click', function() {
	// Method logic
});

$('ref:element2').on('click', function() {
	// Method logic
});
```

---note---

**Note:** If you add elements to the page dynamically you can call the `Wee.$setRef()` method.