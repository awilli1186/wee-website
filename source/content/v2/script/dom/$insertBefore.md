---
name: $insertBefore
heading:  Insert each matching source selection element before each matching target selection
related: $insertAfter
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| target | [selection](/script#selection) | -- | Target selection | ✓ |
| source | [selection](/script#selection) | -- | Source selection | ✓ |

---code---

```javascript
Wee.$insertBefore('ref:element', '.js-element');
```