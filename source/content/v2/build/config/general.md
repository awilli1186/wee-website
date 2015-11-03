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

---code|label:Global Data---

Sharing global data across your style and script is simple. Set key value pairs to be injected and made available to both. You can also set data specifically in either the script or style configuration block to limit the data scope.

```javascript
"data": {
	"brandColor": "#00ff00"
}
```

To access global script data use the following syntax:

```javascript
Wee.$get('global:brandColor');
```

Less data can simply be accessed by the key name as follows:

```less
body {
	color: @brandColor;
}
```