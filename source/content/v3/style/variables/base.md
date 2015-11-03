---
name: Base
---

```less
// Default units

@defaultUnit: rem; // unitless value default
@defaultFontSizeUnit: @defaultUnit;
@defaultLineHeightUnit: em;

// Root sizing

@rootFontSize: 62.5%; // root font size (62.5% = 10px, 100% = 16px)

// All rem-based units are relative to the root size above

@baseColor: @darkestGray;
@baseFont: Arial, Helvetica, sans-serif;
@baseFontSize: 1.6;
@baseFontWeight: normal;
@baseLineHeight: 1em;

@bodyBackground: @white; // false to disable
```