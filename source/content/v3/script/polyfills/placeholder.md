---
name: Placeholder
path: https://github.com/weepower/wee/tree/master/source/js/polyfill/wee.placeholder.js
---

The Wee placeholder polyfill patches support for the placeholder attribute on inputs and textareas. It sets the value to the placeholder but clears it on focus and form post to mimic native placeholder functionality.

```html
<input type="text" name="title" placeholder="Entry Title">
<textarea name="message" placeholder="Write your message..."></textarea>
```