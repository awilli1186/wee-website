---
name: $not
heading: Filter out elements from a matching selection
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| target | [selection](/script#selection) | -- | Target selection | ✓ |
| filter | [function](/script/#functions), [selection](/script#selection) | -- | Filter selection or callback | ✓ |
| options | object | -- | [Callback options](/script/#functions) ||

---code|label:Selection---

```javascript
Wee.$not('ref:element', 'div');
```

---code|label:Function---

The current index and element are injected into the callback. The scope of ```this``` is the element.

```javascript
Wee.$is('ref:element', function(i, el) {
    // Callback logic
});
```