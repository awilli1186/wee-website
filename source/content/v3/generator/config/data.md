---
name: Data
---

Any custom data that you may need for your site can be stored here. They can be nested as deep as necessary and the values are accessible in the templates.

```javascript
"data": {
	"version": "2.1.0",
	"analyticsID": "UA-XXXXXXXX-1",
	"social": {
		"twitter": "weecss",
		"googlePageID": "+weecss"
	}
}
```

You can use them for paths and versions for instance.

```javascript
<script src="{{ site.assetUrl }}/js/script.min.js?v{{ site.jsVersion }}"></script>
```

---note---

**Note:** Data can also be set or overridden in individual content files or within the [section configuration](#sections).