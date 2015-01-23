---
name: Sections
---

The sections tag pair iterates over the sections contained in the current section.

```html
<ul>
{{#sections|tag}}
	<li>{{name|tag}}</li>
{{/sections}}
</ul>
```