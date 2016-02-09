---
name: htaccess
path: https://github.com/weepower/wee/tree/master/public/.htaccess
---

Regardless if you're running an Apache-compatible web server the principles still apply. Avoid serving content from duplicate sources and present a consistent URL structure. Use this as a starting point.

---code|label:Maintenance---

The maintenance block serves as a quick mechanism to toggle a temporary redirect to a maintenance page. It also has an IP exclusion to ensure that internal traffic can still access the full site.

```apache
RewriteCond %{REQUEST_URI} !^/maintenance\.html$
RewriteCond %{REMOTE_ADDR} !^123\.456\.789\.
RewriteCond $1 !^(assets) [NC]
RewriteRule ^(.*)$ /maintenance.html [R=307,L]
```

---code|label:Setup---

A couple basic Apache settings are made and the X-UA-Compatible header and encoding are set. If uncommented the two corresponding meta tags should be removed from the [HTML head](/start/markup#meta). 

```apache
RewriteEngine On
Options +FollowSymLinks -Indexes -MultiViews

# Internet Explorer document mode
Header set X-UA-Compatible "IE=edge"

# Disable iframe embedding
Header always append X-Frame-Options SAMEORIGIN

# Character set
AddDefaultCharset utf-8
AddCharset utf-8 .atom .css .geojson .js .json .jsonld .manifest .map .rss .xml

# HTTP Strict Transport Security
Header always set Strict-Transport-Security "max-age=7776000; includeSubDomains"
```

---code|label:HTTP Access Control---

[CORS headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS) open up web servers for cross-domain access. This is particularly helpful when serving assets through a pull CDN zone.

```apache
# Cross-origin images
<FilesMatch "\.(bmp|gif|ico|jpe?g|png|svg|webp)$">
	SetEnvIf Origin ":" IS_CORS
	Header set Access-Control-Allow-Origin "*" env=IS_CORS
</FilesMatch>

# Cross-origin web fonts
<FilesMatch "\.(eot|otf|ttf|woff2?)$">
	Header set Access-Control-Allow-Origin "*"
</FilesMatch>
```

---code|label:Errors---

It's important to intercept common HTTP errors on the host level with custom pages.

```apache
ErrorDocument 404 /404.html
```

---code|label:Project---

Add your project's specific rules to this section. 

```apache
# Custom redirects and rewrites
```

---code|label:Rewrites---

Without specific redirects most servers will allow multiple URLs to access the same endpoint. Funnel requests through redirect logic to ensure there is only one true canonical address.

```apache
# Force www
RewriteCond %{HTTP_HOST} !^www.weepower.com$ [NC]
RewriteRule ^(.*)$ http://www.weepower.com/$1 [R=301,L]

# Remove www (use either force or remove)
# RewriteCond %{HTTP_HOST} !^weepower.com$ [NC]
# RewriteRule ^(.*)$ http://weepower.com/$1 [R=301,L]

# Force SSL
RewriteCond %{HTTPS} !on
RewriteRule ^(.*)$ https://%{HTTP_HOST}/$1 [R=301,L]

# Remove trailing slash
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)/$ /$1 [R=301,L]

# Remove multiple slashes
RewriteCond %{THE_REQUEST} //
RewriteRule ^(.*)$ /$1 [R=301,L]

# Remove index reference
RewriteCond %{REQUEST_URI} ^(.*/)index.html$ [NC]
RewriteRule . %1 [R=301,L]

# Remove extension
RewriteCond %{REQUEST_URI} ^GET\ (.*).html(.*)\ HTTP
RewriteRule (.*).html$ $1$2 [R=301]

# Rewrite extension
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME}.html -f
RewriteRule (.*) $1.html [L]
```