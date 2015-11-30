---
name: browserconfig
path: https://github.com/weepower/wee/tree/master/public/browserconfig.xml
---

Introduced in IE11, the [browserconfig file](https://msdn.microsoft.com/en-us/library/dn320426(v=vs.85).aspx) defines the icon configuration for Windows. By default the browser will look for the file in the root of the website.

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