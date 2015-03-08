---
name: browserconfig
path: /public/browserconfig.xml
---

Introduced in IE11, the browserconfig file dictates icon cofiguration for Windows 8. By default the browser will look for the file in the root of the website.

---code---

```xml
<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
	<msapplication>
		<tile>
			<square70x70logo src="/tileicon.png"/>
			<square150x150logo src="/tileicon.png"/>
			<wide310x150logo src="/tileicon-wide.png"/>
			<square310x310logo src="/tileicon.png"/>
			<TileColor>#006e8c</TileColor>
		</tile>
	</msapplication>
</browserconfig>
```