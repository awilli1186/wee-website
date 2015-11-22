---
name: $siblings
heading: Get unique siblings of each matching selection
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| target | [selection](/script#selection) | -- | Target selection | ✔ |
| filter | [selection](/script#selection) | -- | Filter selection | ✔ |

---code---

```html
<p>Sibling paragraph</p>
<span>Sibling span</span>
<div data-ref="sibling">Target div.</div>
```

---doc|label:All Siblings---

Without a filter all siblings will be returned.

---code|modifier:split---

```javascript
Wee.$siblings('ref:sibling');
```

```javascript
[<p>Sibling paragraph</p>, <span>Sibling span</span>]
```

---code|modifier:split|label:Filtered---

```javascript
Wee.$siblings('ref:sibling', 'p');
```

```javascript
[<p>Sibling paragraph</p>]
```