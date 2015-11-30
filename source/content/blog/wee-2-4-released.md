---
name: Wee 2.4.0 Released
excerpt: Apparently we were kidding about 2.3 being the last 2.x release. There were a few loose ends and improvements we just couldn't wait to complete before Wee 3 is released.
global:
  seoTitle: Wee 2.4.0 Released
  seoDesc: Apparently we were kidding about 2.3 being the last 2.x release. This is the final minor release before Wee 3, seriously.
  bodyClass: blog
---

We're anxious to complete Wee 3 development but this release brings some important improvements that couldn't wait.

###### Here are some of the highlights:

* `$()` can now parse HTML strings
* Controllers can now be registered using `$.fn.methodName = function() {}` bringing parity with jQuery and partial jQuery plugin support
* Private controller methods should now be accessed from public methods using `this.$private.methodName()`
* Added the ability to namespace events like `$('ref:element').on('click.namespace')` and `$('ref:element').off('.namespace')`
* Added new method `Wee.$type(obj)`
* New instances of controllers can be registered by calling `var instance = Wee.fn.controllerName()`
* Ensure all chained methods pass through all available filter and option arguments to the core DOM methods

To read the full changelog take a look at the [release notes](https://github.com/weepower/wee/releases/tag/2.4.0) and check out our [trello board](https://trello.com/b/7KbnQra9/wee) to see what's next. If you have feedback we'd love to hear.