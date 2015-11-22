---
name: Content
---

With the content tag pair a section's content can be looped through.

```html
{{#!}}{{#content|tag}}
<h1>{{name}}</h1>
<div>
	{{output|raw}}
</div>
{{/content}}{{/!}}
```

---code|label:Input & Output---

The input tag returns the raw markdown content before processing. The output tag returns the processed content.

```html
{{#!}}{{#content}}
	{{input}}
	{{output}}
{{/content}}{{/!}}
```

---note---

**Note:** Since HTML entities are encoded by default the raw tag helper is needed to render markup.