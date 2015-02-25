---
name: General
---

The name and description values are for internal reference only.

```javascript
"name": "Project Name",
"description": "Project description.",
```

---code|label:Paths---

To accommodate different server configurations, Wee needs to know your directory structure. The root path is relative to the Gruntfile and the assets directory is relative to the root directory.

```javascript
"paths": {
	"root": "public",
	"assets": "assets"
}
```

---note---

**Note:** The "root" path is your HTML directory. Common values include "www", "public", and "public_html".