---
name: $val
heading: Get value of first matching selection or set values of each matching selection
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| target | [selection](/script#selection) | -- | Target selection | ✓ |
| value | [function](/script/#functions), string | -- | Class name(s) to add or callback | ✓ |

---code|label:Get---

```javascript
Wee.$val('ref:element');
```

---code|label:Set---

```javascript
Wee.$val('ref:element', '123');
```

---code|label:Function---

The current index and value are injected into the callback. The scope of ```this``` is the element.

```javascript
Wee.$val('ref:element', function(i, value) {
    // Callback logic
});
```