---
name: Sections
---

The sections tag pair iterates over the sections contained in the current section.

```markup
{{#!}}<ul>
	{{#sections}}
	<li>{{name}}</li>
	{{/sections}}
</ul>{{/!}}
```