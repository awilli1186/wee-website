---
name: Load
heading: Load specified assets with specified set of options
variables:
  - { var: "conf", desc: "Object parameters below", type: "object", req: true }
options:
  - { var: "files", desc: "Single file path or array of file paths", type: "string, array", req: true }
  - { var: "group", desc: "Optional reference for use with the [ready()](https://www.weepower.com/script/assets#ready) function", type: "string" }
  - { var: "root", desc: "Request root path or domain", type: "string", default: "current root" }
  - { var: "async", desc: "Load asset asynchronously, only applicable to scripts", type: "boolean", default: "true" }
  - { var: "success", desc: "Success callback", type: "callback" }
  - { var: "failure", desc: "Failure callback", type: "callback" }
---

---doc|label:Single File---

```javascript
Wee.assets.load({
	files: '/assets/js/lib/dynamic.js',
	success: function() {
		// Success logic
	}
});
```

---doc|label:File Array---

```javascript
Wee.assets.load({
	root: 'https://cdn.domain.com/assets',
	files: [
	'/js/lib/dynamic.min.js',
	'/css/lib/dynamic.css',
	'/img/dynamic.img'
	],
	success: function() {
		// Success logic
	},
	failure: function() {
		// Failure logic
	}
});
```

---doc|label:Group---

By providing a group name you can optionally check against the group later for completion.

```javascript
Wee.assets.load({
	files: '/assets/js/dynamic.js',
	group: 'dynamicAssets'
});
```