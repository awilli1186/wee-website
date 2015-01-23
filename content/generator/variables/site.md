---
name: Site
---

The site tag enables access to any property specified at the root level of the site file.

### Name &amp; Description

```html
<h1>{{site.name|tag}}</h1>
<span>{{site.description|tag}}</span>
```

### Sections

```html
<ul>
{{#site.sections|tag}}
	<li>{{name|tag}}</li>
{{/site.sections}}
</ul>
```

### Environment

This will return the current development environment. Using this with the |is filter, you can conditionally load content.

```html
{{#site.env|is(prod)|tag}}
<script>
// Script loaded only in production environment
</script>
{{/site.env}}
```

It also allows quick access to any data associated with an environment.

```html
<link rel="stylesheet" href="{{site.assetUrl}}/style.css">
```

### Time

This will return the current time.

```html
{{site.time|tag}}
```