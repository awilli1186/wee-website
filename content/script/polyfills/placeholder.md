---
name: Placeholder
---

The Wee placeholder polyfill patches support for the placeholder attribute on inputs and textareas, essential for forms in IE9 and below. It sets the value
 of the input to the placeholder value but clears it on focus and post to mimic placeholder functionality.

```html
<input type="text" name="title" placeholder="Entry Title">
<textarea name="message" placeholder="Write your message..."></textarea>
```