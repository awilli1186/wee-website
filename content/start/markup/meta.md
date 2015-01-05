---
name: Meta
---

It's best to serve the meta charset and http-equiv values through HTTP headers. There are commented lines in the sample [.htaccess](/start/structure#htaccess) file for that purpose. If uncommented you should remove the two tags from your HTML.

```html
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="description" content="Blueprint for modern web development.">
<meta name="viewport" content="width=device-width, initial-scale=1">
```