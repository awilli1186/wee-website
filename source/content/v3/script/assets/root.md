---
name: Root
heading: Get currently bound asset root or set root with specified value
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| value | string | -- | Root request path ||

---note---

**Note:** You can override the root on individual requests. For instance, you may want to load all your static assets from a CDN but pull JSON or other files from a local server.

---code|label:Set---

The value set here is prepended to every request if not specifically overridden.

```javascript
Wee.assets.root('https://cdn.weepower.com');
```

---doc|label:Get---

Retrieve the current root which defaults to an empty string, unless previously set.

---code|type:string|modifier:split---

```javascript
Wee.assets.root();
```

```javascript
"https://cdn.weepower.com"
```

---code|label:Advanced---

Only set the asset root to a CDN in the production [environment](https://www.weepower.com/script/core#env).

```javascript
if (Wee.$env() == 'prod') {
	Wee.assets.root('https://cdn.weepower.com');
}
```