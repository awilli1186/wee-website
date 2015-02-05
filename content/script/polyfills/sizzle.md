---
name: Sizzle
link: http://sizzlejs.com/
---

Sizzle powers the jQuery selector engine and is used in Wee for broader selector compatibility in IE8 and below. The example below comes from the default legacy script showing how to override the core selector engine. Any subsequent <code>Wee.$</code> or <code>$</code> method calls will route through the external selector. The selector and context arguments are passed through to the WeeSelector function reference. 

```javascript
var WeeSelector = Sizzle;
```