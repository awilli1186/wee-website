---
name: $insertAfter
heading: Insert each matching source selection element after each matching target selection
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| target | [selection](/script#selection) | -- | Target selection | ✓ |
| source | [selection](/script#selection) | -- | Source selection | ✓ |

---code---

```javascript
Wee.$insertAfter('ref:element', '.js-element');
```