---
name: Wee 3 Released
excerpt: With dozens of new features and improvements, Wee 3 is a massive update and an exciting evolution. Read more for all the details.
global:
  seoTitle: Wee 3 Released
  seoDesc: 6 months in the making, Wee 3 is a massive update and an exciting evolution. Read more for all the details.
---

It's been 6 months since Wee 2.4 was published and 2.5 years since the initial public release. A lot has changed in that time. The framework has grown from an HTML boilerplate and mixin library to an all-in-one tool that satisfies the requirements of many projects. The best part is that the additional compiled size with all the features enabled is only ~3KB gzipped in Wee 3.

There were a few primary objectives with this release. One was to pull out the library and build process into an npm module. This makes updating simple - just run `npm update` and you're done. There was also considerable work to bring consistency between the APIs and quite a bit of deprecated code was removed. There are also new major features including the HTML5 History interface and data-binding applications.

You can read the [full release notes](https://github.com/weepower/wee/releases/tag/3.0.0) on GitHub but here are some of the highlights:

##### General

* **Breaking:** Removed default support for IE8
* **Breaking:** Migrated core resources and build logic to an [npm module](https://www.npmjs.com/package/wee-core) in a [separate repo](https://github.com/weepower/wee-core)
* **Breaking:** Split source files above root with compiled assets output publicly
* Converted core tests to use [Intern](https://theintern.github.io) and added boilerplate for writing custom tests
* Added new CLI for generators, project resetting, testing, and update checking

##### Core

* Added a data storage observation mechanism through `$observe()` and `$unobserve()`
* Added new `$trigger()` method to execute matching observables
* Added new `$has()`, `$concat()`, `$merge()`, and `$drop()` data storage methods to core and controllers
* Added new one-way data-binding applications functions through `Wee.app.make()`

##### Animate

* Added animation module with the ability to register custom easing with `Wee.animate.addEasing()`

##### DOM

* **Breaking:** Implemented string casting when using `Wee.$data()`
* Properly implemented camelCase string conversion for data attributes

##### Events

* Added `Wee.events.addEvent()` to register custom events
* Added touch module for detecting `swipeLeft`, `swipeRight`, `swipeUp`, and `swipeDown` events

##### History

* Added new HTML5 History module for PJAX navigation

##### Routes

* Added new `Wee.routes.addFilter()` mechanism for registering custom route evaluation methods
* Added `:unload` and `:pop` filter options for History navigation
* Added new `:once` filter option
* Added negation capability to route by using a preceding !

##### View

* **Breaking:** Require `each` filter for iterating through arrays/objects
* Allow standalone view filters not chained to a property
* Added new `{{ else }}` syntax for else statements
* Add new view build process and `Wee.view.addView()` method

##### Style

* Added ability to namespace core mixins through `wee.json`

#### Build

* **Breaking:** Added new Wee CLI for calling build tasks, example: `wee run:static`

##### Modules

* Officially add support for Wee modules, along with documentation