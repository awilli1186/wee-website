---
name: Buttons
---

```less
@buttonStyled: true;

@buttonColor: @white;
@buttonFont: @baseFont;
@buttonFontSize: @baseFontSize;
@buttonFontWeight: normal;

@buttonPaddingHorizontal: 3;
@buttonPaddingVertical: 1.3;

@buttonMarginBottom: false;

@buttonRounded: @defaultRadius; // false to disable

@buttonTransitionEnabled: false;

@buttonBackground: @darkGray;
@buttonBackgroundHover: darken(@buttonBackground, 5%);
@buttonBackgroundActive: darken(@buttonBackground, 10%);

@buttonBorderColor: false; // false to disable

// Colored Buttons

@coloredButtonClassModifier: button-colored;

@coloredButtonColor: @white; // font color

@coloredButtonBackground: @linkColor;
@coloredButtonBackgroundHover: darken(@coloredButtonBackground, 5%);
@coloredButtonBackgroundActive: darken(@coloredButtonBackground, 10%);

@coloredButtonBorderColor: false;

// Disabled Buttons

@disabledButtonClassModifier: button-disabled;

@disabledButtonColor: @darkGray;

@disabledButtonBackground: @lightGray;

@disabledButtonBorderColor: false;

@disabledButtonCursor: not-allowed;
```