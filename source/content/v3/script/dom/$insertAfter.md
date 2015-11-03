---
name: $insertAfter
heading: Insert each matching source selection element after each matching target selection
related: $insertBefore
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| source | [selection](/script#selection) | -- | Source selection | ✓ |
| target | [selection](/script#selection) | -- | Target selection | ✓ |

---code---

```javascript
Wee.$insertAfter('ref:element', '.js-element');
```