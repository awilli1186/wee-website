---
name: Sections
---

This is where you will specify the different sections of your site, and
information related to each section. As the example below demonstrates, sections
can be nested.

```javascript
"sections": {
	"home": {
		"name": "Homepage",
		"data": {

		},
		"template": "index",
		"target": "public_html/index.html",
		"content": "content/home/body.md"
	},
	"blog": {
		"name": "Blog",
		"data": {

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

The name for the section is set here.

```javascript
"name": "Section Name"
```

### Data

Any custom data that you may need for a section can be stored in the data key.

```javascript
"data": {
	
}
```

### Template

This is where you specify a section's template. The html extension isn't needed.

```javascript
"template": "index"
```

### Target

This specifies the file to which the content will be added.

```javascript
"target": "public_html/index.html"
```

### Content

The files listed here contain the content that will be added to the target file
specified above. Files are compiled in the order that they are listed. Wildcards
can be used as necessary.

```javascript
"content": "content/*.md"
```