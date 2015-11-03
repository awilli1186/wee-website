---
name: $contains
heading: Determine if any matching parent selection contains descendant selection
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| parent | [selection](/script#selection) | -- | Parent selection | ✓ |
| descendant | [selection](/script#selection) | -- | Descendant selection | ✓ |

---code|type:boolean|modifier:split---

```javascript
Wee.$contains('ref:element', '.descendant');
```

```javascript
true
```