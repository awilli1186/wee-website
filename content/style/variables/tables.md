---
name: Tables
---

```less
@tableStyled: true;   // apply base styling by default
@tableBordered: true; // apply outer border by default
@tableStriped: true;  // apply striping by default

// Table Cells

@tableCellLineHeight: @paragraphLineHeight;

@tableCellBorderColor: @lightGray;

@tableCellPaddingHorizontal: .8;
@tableCellPaddingVertical: .6;

// Table Captions

@tableCaptionFontStyle: italic;

@tableCaptionBackground: @lightestGray;

@tableCaptionPaddingVertical: 1.2;
@tableCaptionPaddingHorizontal: @tableCellPaddingHorizontal;

// Striping

@tableStripedBackground: @lightestGray;
@tableStripedPosition: odd; // even, odd
```