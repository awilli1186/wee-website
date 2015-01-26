---
name: Content
---

With the content tag pair a section's content can be iterated over.

```html
{{#content|tag}}
<h3>{{name|tag}}</h3>
<div>
	{{output|raw|tag}}
</div>
{{/content}}
```

### Input &amp; Output

The input tag returns the raw markdown content before processing. The output tag returns the processed content.

```html
{{#content|tag}}
	{{output|tag}}
{{/content}}
```