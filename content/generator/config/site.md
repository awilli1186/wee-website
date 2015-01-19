---
name: Site
heading: JSON-based configuration for your site
---

### Name &amp; Description

These values are for your internal reference only.

```javascript
"name": "My site",
"description": "My site is really cool"
```

### Configuration

```javascript
"config": {
	"watch": true,
	"minify": true,
	"enhanceTypography": true,
	"removeIndex": true,
	"removeTrailingSlashes": true,
	"paths": {
		"partials": "partials",
		"templates": "templates",
		"extensions": "extensions"
	}
}
```

### Environment

```javascript
"env": {
	"prod": {
		"domain": "https://www.example.com",
		"cdnUrl": "https://www.example.com",
		"assetUrl": "https://www.example.com/assets"
	},
	"default": {
		"domain": "http://www.example.dev",
		"cdnUrl": "",
		"assetUrl": "/assets"
	}
}
```

### Data

```javascript
"data": {
	"version": "",
	"analyticsID": "",
	"gitHubRoot": "",
	"social": {
		"twitter": "",
		"googlePageID": ""
	}
}
```

### Sections

```javascript
"sections": {
	"home": {
		"name": "Homepage",
		"data": {
			"excludeNav": true
		},
		"template": "index",
		"target": "public_html/index.html",
		"content": "content/home/body.md"
	},
	"blog": {
		"name": "Blog",
		"data": {
			"excludeNav": true
		},
		"template": "blog",
		"target": [
			"public_html/blog/index.html"
		],
		"content": "content/blog/*.md",
		"sections": {
			"entries": {
				"name": "Entries",
				"data": {
					"excludeNav": true
				},
				"template": "entry",
				"target": [
					"public_html/blog/{{name|slug}}.html"
				],
				"content": "content/blog/*.md"
			}
		}
	}
}
```