---
name: Sizzle
---

[Sizzle](http://sizzlejs.com/) powers the jQuery selector engine and is used in Wee for broader selector compatibility in IE8 and below. The example below comes from the default legacy script showing how to override the engine.

```javascript
var WeeSelector = Sizzle;
```