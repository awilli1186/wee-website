---
name: General
---

The name value is for internal reference only.

```javascript
"name": "Project Name",
```

---code|label:Paths---

To accommodate different publish configurations, Wee needs to know your directory structure. The root and source paths are relative to `wee.js` and the asset directory is relative to the root directory.

```javascript
"paths": {
	"root": "public",
	"assets": "assets",
	"source": "source"
}
```

---note---

**Note:** The `root` path is your public HTML directory. Common values include `www`, `public`, and `public_html`.

---code|label:Global Data---

Sharing global data across your style and script is simple. Set key-value pairs to be injected and made available to both. You can also set data specifically in either the script or style configuration block to limit the data scope.

```javascript
"data": {
	"brandColor": "#0f0"
}
```

To access global script data use the following syntax:

```javascript
Wee.$get('global.brandColor');
```

Style data can simply be accessed by the key name in Less as follows:

```less
body {
	color: @brandColor;
}
```