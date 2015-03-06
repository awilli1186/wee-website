---
name: Placeholder
path: /public/assets/js/polyfill/wee.placeholder.js
---

The Wee placeholder polyfill patches support for the placeholder attribute on input and textarea fields. It sets the value
 of the input to the placeholder value but clears it on focus and form post to mimic native placeholder functionality.

```html
<input type="text" name="title" placeholder="Entry Title">
<textarea name="message" placeholder="Write your message..."></textarea>
```