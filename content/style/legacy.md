---
name: Legacy
---

IE8 doesn't support media queries. Instead of using complicated polyfills to patch functionality that isn't applicable to a desktop browser Wee automates concatenating the rules from the media queries into a single fallback file that can be servers up specifically to IE8. Additionally it includes a few hacks to get certain HTML structure to behave and the Grunt process handles converting all REM values to pixels.