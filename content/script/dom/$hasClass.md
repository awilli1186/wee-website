---
name: $hasClass
heading: Determine if the matching selection has a class
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| target | [selection](/script#selection) | -- | Target selection | ✓ |
| className | string | -- | Specific class name(s) | ✓ |

---code|type:boolean|modifier:split|label:Single---

```javascript
$('ref:element').hasClass('class');
```

```javascript
false
```

---doc|label:Multiple---

If any of the class names exist on the selection the response is true.

---code|type:boolean|modifier:split---

```javascript
$('ref:element').hasClass('class class2');
```

```javascript
true
```