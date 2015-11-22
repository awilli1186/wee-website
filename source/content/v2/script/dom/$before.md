---
name: $before
heading: Insert selection or markup before each matching selection
related: $after
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| target | [selection](/script#selection) | -- | Target selection | ✔ |
| source | [function](/script/#functions), [selection](/script#selection), string | -- | Source selection, callback, or HTML string | ✔ |
| remove | boolean | false | Remove target after insertion ||

---code|label:Selection---

```javascript
Wee.$before('ref:element', Wee.$('.js-element'));
```

---code|label:Markup---

```javascript
Wee.$before('ref:element', '<span>Injected notice</span>');
```

---code|label:Function---

The current index and HTML are injected into the callback. The scope of ```this``` is the element.

```javascript
Wee.$before('ref:element', function(i, html) {
    // Callback logic
});
```