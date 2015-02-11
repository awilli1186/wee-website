---
name: $is
heading: Determine if the first matching selection matches a specified criteria
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| target | [selection](/script#selection) | -- | Target selection | ✓ |
| filter | [function](/script/#functions), [selection](/script#selection) | -- | Filter selection or callback | ✓ |
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

The current element represents the context of the callback.

```javascript
Wee.$is('ref:element', function() {
    // Callback logic
});
```