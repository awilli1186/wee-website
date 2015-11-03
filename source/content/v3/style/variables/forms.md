---
name: Forms
---

```less
// Inputs

@inputColor: @darkerGray;
@inputFont: @baseFont;
@inputFontSize: @baseFontSize;
@inputFontWeight: @baseFontWeight;

@inputBackground: @white;

@inputBorderColor: @lighterGray;
@inputBorderColorHover: darken(@inputBorderColor, 10%);
@inputBorderColorFocus: darken(@inputBorderColor, 20%);
@inputBorderWidth: 1px;        // false to disable
@inputRounded: @defaultRadius; // false to disable

@inputMinWidth: 20; // false to disable
@inputMinHeight: 3; // false to disable

@inputPaddingHorizontal: 1.6;
@inputPaddingVertical: 1;

@inputMarginBottom: 2;

@inputPlaceholderColor: lighten(@inputColor, 40%);

// Invalid Inputs

@inputColorInvalid: darken(@inputBorderColorInvalid, 10%);

@inputBackgroundInvalid: @white;

@inputBorderColorInvalid: #a41818;
@inputBorderColorInvalidHover: darken(@inputBorderColorInvalid, 10%);
@inputBorderColorInvalidFocus: darken(@inputBorderColorInvalid, 20%);
@inputBorderWidthInvalid: 1px; // false to disable

// Required Inputs

@inputColorRequired: darken(@inputBorderColorRequired, 10%);

@inputBackgroundRequired: @white;

@inputBorderColorRequired: @darkGray;
@inputBorderColorRequiredHover: darken(@inputBorderColorRequired, 10%);
@inputBorderColorRequiredFocus: darken(@inputBorderColorRequired, 20%);
@inputBorderWidthRequired: 1px; // false to disable

// Disabled Inputs

@inputColorDisabled: @darkGray;

@inputBackgroundDisabled: @lightestGray;

@inputBorderWidthDisabled: false; // false to disable

@inputCursorDisabled: not-allowed;

// Selects

@multiSelectMinHeight: 8;

// Checkboxes

@checkboxMarginBottom: 1;
@checkboxMarginRight: .5;

// Textareas

@textareaLineHeight: 1.3em;
@textareaMinHeight: 8;
@textareaResize: vertical; // none, horizontal, vertical, both
@textareaPaddingHorizontal: 1.6;
@textareaPaddingVertical: 1;

// Legends

@legendColor: @darkerGray;
@legendFont: @baseFont;
@legendFontSize: 1.8;

@legendMarginBottom: 1.4;

// Labels

@labelFontWeight: normal;
@labelLineHeight: 1.3em;

@labelMarginBottom: .4;
@labelMarginRight: 1;
```