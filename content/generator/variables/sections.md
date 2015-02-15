---
name: Sections
---

The sections tag pair iterates over the sections contained in the current section.

```html
{{#!}}<ul>
{{#sections}}
	<li>{{name}}</li>
{{/sections}}
</ul>{{/!}}
```