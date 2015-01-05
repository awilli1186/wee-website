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
@buttonPaddingVertical: 1.4;

@buttonMarginBottom: 0;

@buttonBevelEnabled: false;
@buttonBevelColor: light; // dark, light
@buttonBevelOpacity: 30%;

@buttonRounded: 3px; // false to disable

@buttonTransitionEnabled: true;

@buttonBackground: @darkGray;
@buttonBackgroundHover: darken(@buttonBackground, 5%);
@buttonBackgroundActive: darken(@buttonBackground, 10%);

@buttonBorderColor: false; // false to disable

// Colored Buttons

@coloredButtonColor: @white; // font color

@coloredButtonBackground: @linkColor;
@coloredButtonBackgroundHover: darken(@coloredButtonBackground, 5%);
@coloredButtonBackgroundActive: darken(@coloredButtonBackground, 10%);

@coloredButtonBorderColor: darken(@coloredButtonBackground, 5%);

// Disabled Buttons

@disabledButtonColor: @darkGray;

@disabledButtonBackground: @lightGray;

@disabledButtonBorderColor: darken(@disabledButtonBackground, 5%);

@disabledButtonCursor: not-allowed;
```