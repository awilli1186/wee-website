---
name: Remove
heading: Remove one or more files from the DOM
variables:
  - { var: "files", desc: "Single file path or array of file paths", type: "string, array", req: true}
---

```javascript
Wee.assets.remove('/assets/js/file.js');
```