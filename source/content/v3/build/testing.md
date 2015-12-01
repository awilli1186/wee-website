---
name: Testing
heading: Easily drop in functional and unit tests using Intern
---

[Intern](https://theintern.github.io) is a comprehensive framework for testing web projects. By default in Wee it requires [ChromeDriver](https://sites.google.com/a/chromium.org/chromedriver/) be installed. To change that or customize anything about the Intern setup modify source/js/test/config.js.

Run the following command to kick off JavaScript tests.

```bash
wee test
```

You can also access the Intern visual report at "/$root/node_modules/intern/client.html?config=source/js/tests/config&amp;initialBaseUrl=/$root" in your browser.

---note---

**Note:** To view the core Wee tests navigate to "/$root/node_modules/wee-core/node_modules/intern/client.html?config=js/tests/config&initialBase=/$root/node_modules/wee-core" in your local project.