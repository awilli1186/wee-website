---
name: $hasClass
heading: Determine if the matching selection has a class
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| target | [selection](/script#selection) | -- | Target selection | ✓ |
| className | string | -- | Specific class name | ✓ |

---code|label:Single---

```html
<div class="hello" data-ref="element"></div>
```

---code|type:boolean|modifier:split---

```javascript
$('ref:element').hasClass('hello');
$('ref:element').hasClass('donuts');
```

```javascript
true
false
```