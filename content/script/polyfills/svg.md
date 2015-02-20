---
name: SVG
path: /public/assets/js/polyfill/wee.svg.js
---

SVG solves a [lot of problems](http://css-tricks.com/using-svg/) but is unsupported in IE8. The SVG polyfill allows for an automatic or specific fallback to a more widely supported image format.

### Default

By default the polyfill will replace the source of any linked SVG files with a PNG from the same path.

---code|modifier:split---

```html
<img src="/assets/img/wee.svg" alt="Wee">
```

```html
<img src="/assets/img/wee.png" alt="Wee">
```

---code|modifier:stacked|label:Override---

If you need to specify the fallback set the ```data-fallback``` attribute. This is useful if the fallback path is different than the originally linked SVG, it is in a different format than PNG, or you are using ```<svg>``` directly in your markup.

```html
<svg viewBox="0 0 501.3 165.7" role="img" aria-label="Wee" data-fallback="/assets/img/wee.png">
	<path fill="#fff" d="M481.2 111c-39.2 23.3-67.8 38.3-84.2"></path>
</svg>
```

```html
<img src="/assets/img/wee.png" role="img" aria-label="Wee">
```