---
name: Validate
heading: Enforce code quality and formatting
---

Wee leverages [JSHint](http://jshint.com) and [JSCS](http://jscs.info) for automatic and manual code validation. JSHint serves as more of a high-level quality check and JSCS is focused on code consistency and formatting. In wee.json you can disable either independently or point them to custom configurations.

To run validation on demand execute the command below.

```bash
wee validate
```