---
name: browserconfig
path: /public/browserconfig.xml
---

Introduced in IE11, the browserconfig file dictates icon configuration for Windows 8. By default the browser will look for the file in the root of the website.

---code---

```xml
<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
	<msapplication>
		<tile>
			<square70x70logo src="/assets/img/icons/tile.png"/>
			<square150x150logo src="/assets/img/icons/tile.png"/>
			<square310x310logo src="/assets/img/icons/tile.png"/>
			<wide310x150logo src="/assets/img/icons/tile-wide.png"/>
			<TileColor>#168eaf</TileColor>
		</tile>
	</msapplication>
</browserconfig>
```