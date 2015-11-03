---
name: $insertBefore
heading:  Insert each matching source selection element before each matching target selection
related: $insertAfter
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| source | [selection](/script#selection) | -- | Source selection | ✓ |
| target | [selection](/script#selection) | -- | Target selection | ✓ |

---code---

```javascript
Wee.$insertBefore('ref:element', '.js-element');
```