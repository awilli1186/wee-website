---
name: Values
---

You can easily disable any unneeded breakpoints by setting them to false in your project.json.

1. Portrait Mobile (320px)
2. Landscape Mobile (480px)
3. Portrait Tablet (768px)
4. Small Desktop (1024px)
5. Medium Desktop (1280px)
6. Large Desktop (1440px)

---note---

**Note:** Wee uses the font family of the HTML element to reference the current breakpoint. You can  add additional custom values by setting the value to a numeric string in your CSS. This would typically be done in a custom media query.

```css
@media (max-width: 600px) {
	html {
		font-family: '1.5';
	}
}
```