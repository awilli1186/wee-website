---
name: Images
---

```less
@imagePath: '../img/';         // absolute or relative path
@spriteFilename: 'sprite.png'; // relative to image path above

@retinaSpriteWidth: auto;
@retinaSpriteHeight: auto;

// Margin applied when using img-left and img-right classes

@imageMarginBottom: 2;
@imageMarginSide: 2;

@retinaSuffix: '-2x'; // retina filename suffix

// Figures

@figureBorderColor: false; // false to disable
@figureRounded: false;

@figurePadding: @blockMarginBottom;

// Figure Captions

@figCaptionColor: @darkGray;
@figCaptionFontStyle: italic;
@figCaptionLineHeight: @paragraphLineHeight;

// Alignment

@imageLeftClass: img-left;
@imageRightClass: img-right;
```