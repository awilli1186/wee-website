---
name: $append
heading: Append selection or markup after each matching selection
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| target | [selection](/script#selection) | -- | Target selection | ✓ |
| source | [function](/script/#functions), [selection](/script#selection), string | -- | Source selection, callback, or HTML string | ✓ |

---code|label:Selection---

```javascript
Wee.$append('ref:element', Wee.$('.js-element'));
```

---code|label:Function---

The current index and HTML are injected into the callback. The scope of ```this``` is the element.

```javascript
Wee.$append('ref:element', function(i, html) {
    // Callback logic
});
```