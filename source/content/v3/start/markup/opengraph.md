---
name: Open Graph
---

The [Open Graph protocol](http://ogp.me/) enables any web page to become a rich object in a social graph. Both Facebook and Twitter leverage the protocol for pulling page context when sharing.

```markup
<meta property="og:type" content="website">
<meta property="og:site_name" content="Wee">
<meta property="og:title" content="Front-End Framework" itemprop="name">
<meta property="og:description" content="Blueprint for modern web development." itemprop="description">
<meta property="og:url" content="https://www.weepower.com" itemprop="url">
<meta property="og:image" content="https://www.weepower.com/assets/img/share.png" itemprop="image">
```

---note---

**Note:** In the sample HTML Wee dual-purposes the Open Graph tags as Schema properties for the WebPage scope defined on the document root.