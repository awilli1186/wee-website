---
name: Typography
heading: Style text to match predefined HTML element styling
---

---code|label:Headings---
   
The `heading` class will apply the general heading styling whereas the `h1-h6` classes also apply the specific font size for that heading level.

```less
.heading,
.h1,
.h2,
.h3,
.h4,
.h5,
.h6 {
	color: @headingColor;
	font-family: @headingFont;
	font-weight: @headingFontWeight;
	.line-height(@headingLineHeight);
	.spaced(@headingMarginBottom);
	small {
		font-weight: normal;
	}
}
.h1 {
	.font-size(@h1);
}
.h2 {
	.font-size(@h2);
}
.h3 {
	.font-size(@h3);
}
.h4 {
	.font-size(@h4);
}
.h5 {
	.font-size(@h5);
}
.h6 {
	.font-size(@h6);
}
```

---code|label:Blockquote---


```less
.blockquote {
	color: @quoteColor;
	.border(left; @quoteBorderColor; @quoteBorderWidth);
	.font(@quoteFont; @quoteFontSize; @quoteFontWeight; @quoteLineHeight; @quoteFontStyle);
	.padding(@quotePaddingVertical; @quotePaddingHorizontal);
	cite {
		color: @citeColor;
		display: block;
		.font(@citeFont; @citeFontSize; @citeFontWeight; @citeLineHeight; @citeFontStyle);
		.margin(top; @citeMarginTop);
		&:before {
			.content(@citeIndicator);
		}
	}
	p {
		color: @quoteColor;
	}
}
```

---code|label:Horizontal Rule---


```less
.hr {
	border: 0;
	display: block;
	height: 1px;
	.border(top; @ruleColor; @ruleHeight; @ruleStyle);
	.margin(vertical; @ruleMargin);
}
```