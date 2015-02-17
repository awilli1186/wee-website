---
name: htaccess
path: /public/.htaccess
---

Regardless if you're running an Apache-compatible web server the principles still apply. Avoid serving content from duplicate sources and present a consistent URL structure. Use this as a starting point.

---code|label:Maintenance---

The maintenance block serves as a quick mechanism to toggle a temporary redirect to a maintenance page. It also has an IP exclusion to ensure that internal traffic can still access the full site.

```htaccess
#RewriteCond %{REMOTE_ADDR} !^123\.456\.789\.
#RewriteCond %{REQUEST_URI} !^/maintenance\.html$
#RewriteCond $1 !^(assets) [NC]
#RewriteRule ^(.*)$ /maintenance.html [R=307,L]
```

---code|label:Setup---

A couple basic settings are made... Also, the X-UA-Compatible header and character set are set. If uncommented the two corresponding meta tags should be removed from the HTML head. 

```htaccess
RewriteEngine On
Options +FollowSymLinks -Indexes -MultiViews

#Header set X-UA-Compatible "IE=edge"

# Character set
#AddDefaultCharset utf-8
#AddCharset utf-8 .css .js .json .map .rss .xml
```

---code|label:Remote Assets---

```htaccess
#<FilesMatch "\.(cur|gif|ico|jpe?g|png|svgz?|webp)$">
#	SetEnvIf Origin ":" IS_CORS
#	Header set Access-Control-Allow-Origin "*" env=IS_CORS
#</FilesMatch>

#<FilesMatch "\.(eot|otf|tt[cf]|woff2?)$">
#	Header set Access-Control-Allow-Origin "*"
#</FilesMatch>
```

---code|label:Errors---

```htaccess
ErrorDocument 404 /404.html
```

---code|label:Project---

```htaccess
# Custom redirects and rewrites
```

---code|label:Rewrites---

```htaccess
# Force www
#RewriteCond %{HTTP_HOST} !^www\.weepower\.com [NC]
#RewriteRule ^(.*)$ http://www.weepower.com/$1 [R=301,L]

# Remove www (don't use both force and remove)
#RewriteCond %{HTTP_HOST} ^www\.weepower\.com [NC]
#RewriteRule ^(.*)$ http://www.weepower.com/$1 [R=301,L]

# Force SSL
#RewriteCond %{SERVER_PORT} 80
#RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [R=301,L]

# Remove trailing slash
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)/$ /$1 [R=301,L]

# Remove multiple slashes
RewriteCond %{THE_REQUEST} //
RewriteRule ^(.*)$ /$1 [R=301,L]

# Remove index reference
RewriteCond %{REQUEST_URI} ^(.*/)index\.html$ [NC]
RewriteRule . %1 [R=301,L]

# Remove extension
RewriteCond %{THE_REQUEST} ^GET\ (.*)\.html(.*)\ HTTP
RewriteRule (.*)\.html$ $1$2 [R=301]

# Rewrite extension
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME}\.html -f
RewriteRule (.*) $1\.html [L]
```