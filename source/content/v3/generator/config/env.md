---
name: Env
---

This is where you can specify environment-specific config values for use in your templates.

```javascript
"env": {
	"prod": {
		"domain": "https://www.weepower.com",
		"cdnUrl": "https://cdn.weepower.com"
	},
	"default": {
		"domain": "https://weepower.dev",
		"cdnUrl": ""
	}
}
```

Here are a couple examples of how you might use them.

```javascript
{{ #! }}
{{ #site.env|is('prod') }}
	<script>
	// Google Analytics script
	ga('create', '{{ site.analyticsID }}', 'auto');
	ga('send', 'pageview');
	</script>
{{ /site.env }}
{{ /! }}
```

---code|label:Environment Building---

To compile your project for an environment other than the default pass the env argument to the generate command.

```bash
wee run:generate --env=prod
```