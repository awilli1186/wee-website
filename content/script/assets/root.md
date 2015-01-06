---
name: Root
heading: Get currently bound resource root or set root with specified value
variables:
  - { var: "val", desc: "root request path", type: "string" }
variableNotes: You can override the root on individual requests. For instance, you may want to load all your static assets from a CDN but need to pull JSON or other files from the local server.
---

---doc|label:Set---

The value set here is prepended to every request unless it is overridden when loading.

```javascript
Wee.assets.root('https://cdn.domain.com');
```

---doc|label:Get---

Retrieve the current root which defaults to an empty string, unless otherwise set.

---code---

```javascript
Wee.assets.root();
```

```html
https://cdn.domain.com
```

---doc|label:Advanced---

Only set the asset root to a CDN in the production [environment](https://www.weepower.com/script/core#env).

```javascript
if (Wee.$env() == 'prod') {
	Wee.assets.root('https://cdn.domain.com');
}
```