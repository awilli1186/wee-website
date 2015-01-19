---
name: Remove
heading: Remove one or more files from the DOM
---

---table---

| Variable | Type          | Default | Description                             | Required |
| -------- | ------------- | ------- | --------------------------------------- | -------- |
| files    | string, array | --      | Single file path or array of file paths | &#10003; |

---doc---

```javascript
Wee.assets.remove('/assets/js/file.js');
```