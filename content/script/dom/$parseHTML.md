---
name: $parseHTML
heading: Convert HTML to a DOM object
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| html | string | -- | HTML to convert | ✓ |
| convert | boolean | -- | Convert to Wee DOM object ||

---code---

```javascript
Wee.$parseHTML('<div>Testing</div>');
```