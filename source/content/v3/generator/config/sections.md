---
name: Sections
---

This is where you will specify the different sections of your site, and information related to each section. As the example below demonstrates, sections can be nested.

```javascript
"sections": {
	"home": {
		"name": "Homepage",
		"data": {
			"seoTitle": "SEO Friendly Title",
		},
		"template": "index",
		"target": "public_html/index.html",
		"contentRoot": "home",
		"content": "body.md"
	},
	"blog": {
		"name": "Blog",
		"template": "blog",
		"target": [
			"public_html/blog/index.html"
		],
		"content": "content/blog/*.md",
		"sections": {
			"entries": {
				"name": "Entries",
				"template": "entry",
				"target": [
					"public_html/blog/{{sourceName|slug}}.html"
				],
				"content": "blog/*.md"
			}
		}
	}
}
```

---code|label:Name---

The name for the section is set here and available to the template.

```javascript
"name": "Section Name"
```

---code|label:Data---

Any custom data that you may need for a section can be stored in the data object. They are accessible via `{{ section.sectionVariable }}` tags.

```javascript
"data": {
	"sectionVariable": "value"
}
```

---code|label:Template---

This is where you specify a section's template. The html extension is assumed by default.

```javascript
"template": "index"
```

---code|label:Target---

This specifies the file to which the content will be written to.

```javascript
"target": "public_html/index.html"
```

---code|label:Content---

The files listed here contain the content that will be made available to the defined template. Files are compiled in the order that they are listed. A string or an array can be provided and all standard globbing patterns are supported.

```javascript
"content": [
	"content/intro.md",
	"content/*.md"
]
```