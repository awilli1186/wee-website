---
name: Parent
---

The parent tag can be used to access the parent section of the current section.

```html
{{#parent|notEmpty|tag}}{{parent.name|tag}}{{/parent}}
```