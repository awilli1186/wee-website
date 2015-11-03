---
name: Env
---

This is where you will specify environment-specific configuration values for use in your templates.

```javascript
"env": {
	"prod": {
		"domain": "https://www.weepower.com",
		"cdnUrl": "https://cdn.weepower.com",
	},
	"default": {
		"domain": "https://weepower.dev",
		"cdnUrl": "",
	}
}
```

---code|label:Environment Building---

To compile your project for an environment other than the default pass the env argument to the generate command.

```bash
grunt generate --env=prod
```