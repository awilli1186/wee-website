---
name: $is
heading: Determine if at least one matching selection matches a specified criteria
related: $not
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| target | [selection](/script#selection) | -- | Target selection | ✔ |
| filter | [function](/script/#functions), [selection](/script#selection) | -- | Filter selection or callback | ✔ |
| options | object | -- | [Callback options](/script/#functions) ||

---code|label:Selection---

```html
<div class="js-element"></div>
```

---code|type:boolean|modifier:split---

```javascript
Wee.$is('.js-element', 'div');
```

```javascript
true
```

---code|label:Function---

The current index and element are injected into the callback. The scope of ```this``` is the element.

```html
<ul class="names">
	<li>John Doe</li>
	<li data-hidden="true">Jane Doe</li>
	<li>John Smith</li>
	<li>Jane Smith</li>
</ul>
```

---code|type:boolean|modifier:split---

```javascript
Wee.$is('.names li', function(i, el) {
	// Check if data-hidden is set to true
	return Wee.$data(el, 'hidden') === 'true';
});
```

```javascript
true
```