---
name: $prepend
heading: Prepend selection or markup before each matching selection
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| target | [selection](/script#selection) | -- | Target selection | ✓ |
| source | [function](/script/#functions), [selection](/script#selection), string | -- | Source selection, callback, or HTML string | ✓ |
| options | object | -- | [Callback options](/script/#functions) ||

---code|label:Selection---

```javascript
Wee.$prepend('ref:element', Wee.$('.js-element'));
```

---code|label:Function---

The current index and HTML are injected into the callback. The scope of ```this``` is the element.

```javascript
Wee.$prepend('ref:element', function(i, html) {
    // Callback logic
});
```