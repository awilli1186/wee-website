---
name: Server
---

When Wee is running and serving your site through the proxy, you can chose to have it mirror actions between connected browsers. That means if you have a browser open to your proxy URL on perhaps a mobile device on the same network, and your local development device, when you scroll or click or take an action on one browser, it will be replicated on the other.

```javascript
"ghostMode": true
```

---code|label:Host---

Lorem ipsum dolor.

```javascript
"host": "auto"
```

---code|label:Port---

If for some reason you are having a port conflict, you can change the port here.

```javascript
"port": 3000
```

---code|label:Reload---

This allows you, of course, to enable or disable reloading whenever CSS, JS, or static files change, but it also allows you to specify only certain paths and extensions to watch.

```javascript
"reload": {
	"enable": true,
	"watch": {
		"root": true,
		"paths": [

		],
		"extensions": [
			"html"
		]
	}
}
```

---code|label:Tasks---

With the ```grunt local``` task, Wee needs to know what your local server address is for the proxy. It then uses the proxy to sit between your browser and the development server so it can inject CSS changes, or reload the page for static and JavaScript changes.

With ```grunt static``` you can set whether to use HTTPS.

```javascript
"tasks": {
	"local": {
		"https": true,
		"proxy": "https://wee.dev"
	},
	"static": {
		"https": true
	}
}
```