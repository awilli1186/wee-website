---
name: Replace
heading: Replace one or more loaded files with set of options
variables:
  - { var: "conf", desc: "Single file path or array of file paths", type: "string, array", req: true }
---

```javascript
Wee.assets.replace('/assets/js/file.js');
```