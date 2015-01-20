---
name: Sections
---

Sections can be nested.

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

### Name

```javascript
"name": "Section Name"
```

### Data

```javascript
"data": {
	"excludeNav": true
}
```

### Template

```javascript
"template": "index"
```

### Target

```javascript
"target": "public_html/index.html"
```

### Content

```javascript
"content": "content/*.md"
```