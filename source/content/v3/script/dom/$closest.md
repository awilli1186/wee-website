---
name: $closest
heading: Get unique closest ancestors of each matching selection
---

---variables---

| Variable | Type | Default | Description | Required |
| -- | -- | -- | -- | -- |
| target | [selection](/script#selection) | -- | Target selection | ✔ |
| filter | [selection](/script#selection) | -- | Filter selection | ✔ |
| context | [selection](/script#selection) | -- | Context selection ||

---code---

```html
<div class="nav">
	<a class="link--account">Your Account</a>
</div>
<div class="nav">
	<a class="link--about">About Us</a>
</div>
```

---code|modifier:split---

```javascript
Wee.$closest('.link--about', '.nav');
```

```html
<div class="nav">
	<a class="link--about">About Us</a>
</div>
```

---note---

**Note:** This method traverses up the DOM for the closest match. It doesn't match descendants.