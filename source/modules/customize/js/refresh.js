/* global less */
/* exported update */

var weeVariables = {
	'@minWidth': 'false',
	'@maxWidth': '1280px',
	'@bumperPadding': '6%',
	'@padContainer': 'true',
	'@gridMargin': '5%',
	'@gridColumns': '8',
	'@gridSpaceless': 'false',
	'@blockMarginBottom': '4',
	'@primary': '#349bb9',
	'@secondary': '#70c1b3',
	'@tertiary': '#f18f01',
	'@info': '#00f',
	'@success': '#008000',
	'@warning': '#f00',
	'@white': '#fff',
	'@lightestGray': 'darken(#fff, 4%)',
	'@lighterGray': 'darken(#fff, 10%)',
	'@lightGray': 'darken(#fff, 25%)',
	'@gray': 'darken(#fff, 35%)',
	'@darkGray': 'darken(#fff, 55%)',
	'@darkerGray': 'darken(#fff, 65%)',
	'@darkestGray': 'darken(#fff, 75%)',
	'@black': '#000',
	'@defaultUnit': 'rem',
	'@defaultFontSizeUnit': '@defaultUnit',
	'@defaultLineHeightUnit': 'em',
	'@rootFontSize': '62.5%',
	'@baseColor': '@darkestGray',
	'@baseFont': 'Arial, Helvetica, sans-serif',
	'@baseFontSize': '1.6',
	'@baseFontWeight': 'normal',
	'@baseLineHeight': '1em',
	'@bodyBackground': '@white',
	'@linkColor': '@primary',
	'@linkColorHover': 'darken(@linkColor, 10%)',
	'@linkColorActive': 'darken(@linkColor, 20%)',
	'@linkDecoration': 'none',
	'@linkDecorationHover': 'false',
	'@paragraphColor': '@baseColor',
	'@paragraphFontWeight': '@baseFontWeight',
	'@paragraphLineHeight': '1.7em',
	'@paragraphMarginBottom': '2',
	'@headingColor': '@baseColor',
	'@headingFont': 'Tahoma, Geneva, sans-serif',
	'@headingFontWeight': '@boldFontWeight',
	'@headingLineHeight': '1.4em',
	'@headingMarginBottom': '2',
	'@h1': '3.6',
	'@h2': '3.2',
	'@h3': '2.8',
	'@h4': '2.4',
	'@h5': '2',
	'@h6': '1.6',
	'@imagePath': '\'../img/\'',
	'@spriteFilename': '\'sprite.png\'',
	'@retinaSpriteWidth': 'auto',
	'@retinaSpriteHeight': 'auto',
	'@imageMarginBottom': '2',
	'@imageMarginSide': '2',
	'@retinaSuffix': '\'-2x\'',
	'@figureBorderColor': 'false',
	'@figureRounded': 'false',
	'@figurePadding': '@blockMarginBottom',
	'@figCaptionColor': '@darkGray',
	'@figCaptionFontStyle': 'italic',
	'@figCaptionLineHeight': '@paragraphLineHeight',
	'@imageLeftClass': 'img-left',
	'@imageRightClass': 'img-right',
	'@fontPath': '\'../fonts/\'',
	'@woff2Enabled': 'true',
	'@listColor': '@paragraphColor',
	'@listLineHeight': '@paragraphLineHeight',
	'@listMarginBottom': '@paragraphMarginBottom',
	'@listMarginLeft': 'false',
	'@listBulletStyle': 'disc',
	'@listBulletPosition': 'inside',
	'@nestedListMarginLeft': '2',
	'@liMarginBottom': '.2',
	'@dlMarginBottom': '@blockMarginBottom',
	'@dtColor': '@darkerGray',
	'@dtFont': '@headingFont',
	'@dtFontSize': '2',
	'@dtMarginBottom': '.2',
	'@ddColor': '@gray',
	'@ddFont': '@baseFont',
	'@ddFontSize': '@baseFontSize',
	'@ddMarginBottom': '1',
	'@quoteColor': '@darkestGray',
	'@quoteFont': 'Georgia, Times',
	'@quoteFontSize': '2',
	'@quoteFontStyle': 'italic',
	'@quoteFontWeight': 'normal',
	'@quoteLineHeight': '1.4em',
	'@quotePaddingHorizontal': '2em',
	'@quotePaddingVertical': '1em',
	'@citeColor': '@gray',
	'@citeFont': '@baseFont',
	'@citeFontSize': '1.8',
	'@citeFontStyle': 'normal',
	'@citeFontWeight': 'normal',
	'@citeLineHeight': '1.2em',
	'@citeMarginTop': '1.4',
	'@citeIndicator': "'\\2014\\00a0'",
	'@ruleColor': '@lightGray',
	'@ruleHeight': '1px',
	'@ruleStyle': 'solid',
	'@ruleMargin': '@blockMarginBottom',
	'@addressColor': '@darkestGray',
	'@addressFont': '@baseFont',
	'@addressFontSize': '@baseFontSize',
	'@addressFontWeight': 'normal',
	'@addressFontStyle': 'normal',
	'@addressLineHeight': '@paragraphLineHeight',
	'@smallFontSize': '.8em',
	'@selectionColor': '@white',
	'@selectionBackground': '@linkColor',
	'@boldFontWeight': 'bold',
	'@normalFontWeight': 'normal',
	'@markColor': '@baseColor',
	'@markBackground': 'yellow',
	'@defaultRadius': '3px',
	'@defaultOpacity': '.2',
	'@defaultDuration': '.2s',
	'@defaultTiming': 'ease-in-out',
	'@abbrUnderline': 'dotted',
	'@codeColor': '@darkestGray',
	'@codeFont': 'monospace',
	'@codeFontSize': '@baseFontSize',
	'@codeLineHeight': '1.4em',
	'@codeBackground': '@lighterGray',
	'@codeBorderColor': 'false',
	'@codeRounded': 'false',
	'@codePaddingHorizontal': '.5em',
	'@codePaddingVertical': '.2em',
	'@codeBlockColor': '@lightestGray',
	'@codeBlockFont': '@codeFont',
	'@codeBlockFontSize': '1.3',
	'@codeBlockLineHeight': '@paragraphLineHeight',
	'@codeBlockTabSize': '4',
	'@codeBlockWrap': 'false',
	'@codeBlockMarginBottom': '@blockMarginBottom',
	'@codeBlockBackground': '@darkestGray',
	'@codeBlockBorderColor': '@codeBorderColor',
	'@codeBlockRounded': 'false',
	'@codeBlockPaddingHorizontal': '2',
	'@codeBlockPaddingVertical': '1.4',
	'@inputColor': '@darkerGray',
	'@inputFont': '@baseFont',
	'@inputFontSize': '@baseFontSize',
	'@inputFontWeight': '@baseFontWeight',
	'@inputBackground': '@white',
	'@inputBorderColor': '@lightGray',
	'@inputBorderColorHover': 'darken(@inputBorderColor, 10%)',
	'@inputBorderColorFocus': 'darken(@inputBorderColor, 20%)',
	'@inputBorderWidth': '1px',
	'@inputRounded': '@defaultRadius',
	'@inputMinWidth': '20',
	'@inputMinHeight': '3',
	'@inputPaddingHorizontal': '1.6',
	'@inputPaddingVertical': '1',
	'@inputMarginBottom': '2',
	'@inputPlaceholderColor': 'lighten(@inputColor, 40%)',
	'@inputColorInvalid': 'darken(@inputBorderColorInvalid, 10%)',
	'@inputBackgroundInvalid': '@white',
	'@inputBorderColorInvalid': '#a41818',
	'@inputBorderColorInvalidHover': 'darken(@inputBorderColorInvalid, 10%)',
	'@inputBorderColorInvalidFocus': 'darken(@inputBorderColorInvalid, 20%)',
	'@inputBorderWidthInvalid': '1px',
	'@inputColorRequired': 'darken(@inputBorderColorRequired, 10%)',
	'@inputBackgroundRequired': '@white',
	'@inputBorderColorRequired': '@darkGray',
	'@inputBorderColorRequiredHover': 'darken(@inputBorderColorRequired, 10%)',
	'@inputBorderColorRequiredFocus': 'darken(@inputBorderColorRequired, 20%)',
	'@inputBorderWidthRequired': '1px',
	'@inputColorDisabled': '@darkGray',
	'@inputBackgroundDisabled': '@lightestGray',
	'@inputBorderWidthDisabled': 'false',
	'@inputCursorDisabled': 'not-allowed',
	'@multiSelectMinHeight': '8',
	'@checkboxMarginBottom': '1',
	'@checkboxMarginRight': '.5',
	'@textareaLineHeight': '1.3em',
	'@textareaMinHeight': '8',
	'@textareaResize': 'vertical',
	'@textareaPaddingHorizontal': '1.6',
	'@textareaPaddingVertical': '1',
	'@legendColor': '@darkerGray',
	'@legendFont': '@baseFont',
	'@legendFontSize': '1.8',
	'@legendMarginBottom': '1.4',
	'@labelFontWeight': 'normal',
	'@labelMarginBottom': '.4',
	'@labelMarginRight': '1',
	'@buttonStyled': 'true',
	'@buttonColor': '@white',
	'@buttonFont': '@baseFont',
	'@buttonFontSize': '@baseFontSize',
	'@buttonFontWeight': 'normal',
	'@buttonPaddingHorizontal': '3',
	'@buttonPaddingVertical': '1.3',
	'@buttonMarginBottom': 'false',
	'@buttonRounded': '@defaultRadius',
	'@buttonTransitionEnabled': 'false',
	'@buttonBackground': '@darkGray',
	'@buttonBackgroundHover': 'darken(@buttonBackground, 5%)',
	'@buttonBackgroundActive': 'darken(@buttonBackground, 10%)',
	'@buttonBorderColor': 'false',
	'@coloredButtonClassModifier': 'button-colored',
	'@coloredButtonColor': '@white',
	'@coloredButtonBackground': '@linkColor',
	'@coloredButtonBackgroundHover': 'darken(@coloredButtonBackground, 5%)',
	'@coloredButtonBackgroundActive': 'darken(@coloredButtonBackground, 10%)',
	'@coloredButtonBorderColor': 'false',
	'@disabledButtonClassModifier': 'button-disabled',
	'@disabledButtonColor': '@darkGray',
	'@disabledButtonBackground': '@lightGray',
	'@disabledButtonBorderColor': 'false',
	'@disabledButtonCursor': 'not-allowed',
	'@tableStyled': 'true',
	'@tableBordered': 'false',
	'@tableStriped': 'true',
	'@tableFontSize': '@baseFontSize',
	'@tableBorderedClassModifier': 'table-bordered',
	'@tableStripedClassModifier': 'table-striped',
	'@tableCellLineHeight': '@paragraphLineHeight',
	'@tableCellBorderColor': '@lightGray',
	'@tableCellPaddingHorizontal': '1.6',
	'@tableCellPaddingVertical': '.6',
	'@tableCaptionFontStyle': 'italic',
	'@tableCaptionBackground': '@lightestGray',
	'@tableCaptionPaddingVertical': '1.2',
	'@tableCaptionPaddingHorizontal': '@tableCellPaddingHorizontal',
	'@tableStripedBackground': '@lightestGray',
	'@tableStripedPosition': 'odd',
	'@printPageMargin': '2cm .5cm'
},
update = function(values) {
	for (var key in values) {
		weeVariables[key] = values[key];
	}

	less.refresh(false, weeVariables);
};