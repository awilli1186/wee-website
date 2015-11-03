---
name: Meta
---

It's best to serve the meta charset and http-equiv values through HTTP headers. There are commented lines in the sample [.htaccess](/start/structure#htaccess) for that purpose. If uncommented, you should remove the two tags from your HTML.

```markup
<meta charset="utf-8">
<meta http-equiv="x-ua-compatible" content="ie=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="Blueprint for modern web development.">
```