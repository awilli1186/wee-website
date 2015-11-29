---
name: Custom
---

You can register your own commands by adding JavaScript files to the `source/commands` directory. The name of the file is exposed as the command name. For instance, "copy.js" would be available as `wee copy`. Here is an example of a command.

```javascript
(function() {
	'use strict';

	module.exports = function(config) {
		var heading = chalk.bold.underline.cyan;

		console.log(heading('Project'));
		console.log(config.project.name);
		console.log();

		console.log(heading('Options'));
		console.dir(config.options, {
			colors: true
		});
		console.log();

		console.log(heading('Arguments'));
		console.dir(config.args, {
			colors: true
		});
		console.log();
	};
})();
```

You can see here that a configuration object is passed through to the command. Options are passed through in the form of `wee copy:option1:option2` and arguments are passed with `--arg1=value1 --arg2=value2`.