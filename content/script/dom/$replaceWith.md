---
name: $replaceWith
heading: Replace each matching selection with selection or markup
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| target | [selection](/script#selection) | -- | Target selection | ✓ |
| source | [function](/script/#functions), [selection](/script#selection), string | -- | Source selection, callback, or HTML string | ✓ |

---code|label:Selection---

```javascript
Wee.$replaceWith('ref:element', Wee.$('.js-element'));
```

---code|label:Markup---

```javascript
Wee.$replaceWith('ref:element', '<span>Replacement element</span>');
```

---code|label:Function---

The current index and HTML are injected into the callback. The scope of ```this``` is the element.

```javascript
Wee.$replaceWith('ref:element', function(i, html) {
    // Callback logic
});
```