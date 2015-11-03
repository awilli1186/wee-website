---
name: Shortcuts
link: /script/core
---

All the core and DOM methods prefixed with `$` are shortcut when chaining is enabled. Just remove the method's dollar sign and replace `Wee` with `$`.

---code|label:Examples---

```javascript
$.unique([1, 2, 2, 3]);
$.get('key');
$.height('ref:element');
```