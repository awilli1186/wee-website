---
name: $toggleClass
heading: Toggle the display of a specified element
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| target | [selection](/script#selection) | -- | Target selection | ✓ |
| className | [function](/script/#functions), string  | -- | Class name(s) or callback | ✓ |
| state | boolean | -- | Force add or remove ||

---code|label:Single---

```javascript
Wee.$toggleClass('ref:element', 'modifier');
```

---code|label:Multiple---

Separate multiple class names with spaces.

```javascript
Wee.$toggleClass('ref:element', 'modifier modifier2');
```

---code|label:Function---

The current index, class value and state are injected into the callback. The scope of ```this``` is the element.

```javascript
Wee.$toggleClass('.element', function(el, i, className) {
    // Callback logic
});
```