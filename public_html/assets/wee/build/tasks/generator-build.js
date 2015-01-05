/* global browserSync, path, project */

module.exports = function(grunt) {
	var fs = require('fs'),
		yaml = require('js-yaml'),
		Remarkable = require('remarkable');

	grunt.registerTask('buildGenerator', function(task) {
		var scope = this,
			build = grunt.util.toArray(project.generator.build),
			configPath = build[task],
			json = grunt.file.readJSON(configPath),
			config = json.config,
			staticRoot = path.dirname(configPath),
			site = Wee.$extend(json.data, {
				config: config,
				name: json.name,
				description: json.description,
				time: new Date(),
				sections: json.sections
			}),
			errors = 0;

		// Setup CommonMark parser
		var md = new Remarkable({
			html: true,
			typographer: config.typographer || false
		});

		// Merge in environment data
		var env = grunt.option('env') || 'default';

		if (json.env[env]) {
			site = Wee.$extend(site, json.env[env]);
			site.env = env;
		}

		// Recursive function for processing site sections
		var processSection = function(context, parent) {
			var keys = Object.keys(context);

			// Loop though sections in current context
			keys.forEach(function(key) {
				var block = context[key],
					root = block.contentRoot || '',
					target = Wee.buildPath(staticRoot, block.target),
					template = grunt.file.read(Wee.buildPath(staticRoot, config.paths.templates + '/' + block.template + '.html')),
					content = grunt.file.expand({
						cwd: path.join(staticRoot, root)
					}, block.content),
					data = {
						content: [],
						site: site
					},
					single = false;

				// Target writing function
				var writeTarget = function() {
					// Add parent reference
					if (parent) {
						data.parent = parent;
					}

					// Create target directory
					var dir = target.substring(0, target.lastIndexOf('/'));

					try {
						grunt.file.mkdir(dir);
					} catch (e) {
						Wee.notify({
							title: 'Generator Error',
							message: 'Error creating "' + dir + '" directory'
						}, 'error');
					}

					// Render template
					var output = Wee.view.render(template, data);

					// Minify rendered output
					if (config.minify === true) {
						try {
							var minify = require('html-minifier').minify;

							output = minify(output, {
								collapseWhitespace: true,
								removeComments: true
							});
						} catch (e) {
							Wee.notify({
								title: 'Generator Error',
								message: 'Error minifying "' + target + '"'
							}, 'error');
						}
					}

					var done;

					if (grunt.cli.tasks[0] == 'generate') {
						done = scope.async();
					}

					// Write output to target file
					fs.writeFile(target, output, function(err) {
						if (err) {
							Wee.notify({
								title: 'Generator Error',
								message: 'Error writing to "' + target + '"'
							}, 'error');

							errors++;
						}

						if (grunt.cli.tasks[0] == 'generate') {
							done();
						}
					});

					// Check for nested sections
					if (block.sections) {
						data.sections = block.sections;

						processSection(block.sections, block);
					}

					block.active = false;
				};

				// Merge in global config values
				if (block.data) {
					Wee.$extend(data, block.data);
				}

				// Determine target processing mode
				if (target.indexOf('{{') !== -1) {
					single = true;
				}

				// Set current section to active
				block.active = true;

				data.content = [];

				content.forEach(function(name, i) {
					var template = '';

					if (name.substring(0, 4) == 'http') {
						var request = name.substring(4, 5) == 's' ?
								require('https') :
								require('http'),
							done = scope.async();

						request.get(name, function(response) {
							var body = '';

							response.on('data', function(d) {
								body += d;
							});

							response.on('end', function() {
								template = body;
								done();
							});
						});
					} else {
						var src = Wee.buildPath(staticRoot, root + '/' + name);

						template = grunt.file.read(src);
					}

					var fileSegments = name.replace(/^.*[\\\/]/, '').split('.');

					fileSegments.splice(-1, 1);

					var obj = {
						name: fileSegments.join('.'),
						original: template,
						input: '',
						blocks: []
					};

					if (template.substring(0, 3) == '---') {
						var results = /^(---(?:\n|\r)([\w\W]+?)---)?([\w\W]*)*/.exec(template);

						// If the YAML exists then extend it into the default
						if (results[2] !== undefined) {
							try {
								var front = yaml.load(results[2]);

								// Check for global data
								if (front.data) {
									Wee.$extend(data, obj.data);
									delete front.data;
								}

								// Merge in YAML data
								obj = Wee.$extend(obj, front);
							} catch (e) {
								Wee.notify({
									title: 'Generator Error',
									message: 'There was a problem parsing the YAML'
								}, 'error');
							}
						}

						obj.original = results[3] ? results[3].trim() : '';
					}

					// Process content blocks
					var last = obj.original.length,
						regex = /(?:---(.+)---)\n/g,
						values = [],
						matches;

					// Loop through segment matches
					while ((matches = regex.exec(obj.original)) !== null) {
						var match = matches[1].trim(),
							segs = match.split('|');

						values.push({
							name: segs[0],
							helpers: segs.splice(1),
							start: matches.index,
							end: regex.lastIndex
						});
					}

					// Loop through segment values
					values.forEach(function(value, i) {
						// Calculate ending index
						var name = value.name,
							end = (i + 1) < values.length ?
								values[i + 1].start :
								last,
							helpers = value.helpers,
							content = obj.original.substr(value.end, end - value.end).trim();

						// Process primary content block
						if (i === 0 && value.start > 0) {
							obj.input = obj.original.substr(0, value.start);

							obj.blocks.push({
								name: 'content',
								input: obj.input,
								output: md.render(obj.input),
								render: true
							});
						}

						// Concatenate additional content blocks
						if (name === 'content') {
							obj.input += content;
						} else {
							var push = helpers.indexOf('push') !== -1,
								render = helpers.indexOf('render') !== -1,
								val = {
									name: name,
									input: content,
									output: md.render(content),
									render: render
								};

							// Handle array blocks
							if (push === true) {
								if (! obj.hasOwnProperty(name)) {
									obj[name] = [];
								}

								obj[name].push(val);
							} else {
								obj[name] = val;
							}

							obj.blocks.push(val);

							// Handle rendered block
							if (render === true) {
								obj.input += content;
							}
						}
					});

					// Inject current context
					data.section = block;

					// Inject current index
					obj['#'] = i;
					obj['##'] = i + 1;

					// Handle basic content
					if (values.length === 0) {
						var rendered = md.render(obj.original);

						obj.input = obj.original;

						obj.blocks.push({
							name: 'content',
							input: obj.original,
							output: rendered,
							render: true
						});

						obj.output = rendered;
					} else {
						obj.output = md.render(obj.input);
					}

					// Push current content object in to content array
					data.content.push(obj);

					if (single === true) {
						target = Wee.view.render(target, obj);
						writeTarget();
					}
				});

				if (single === false) {
					writeTarget();
				}
			});
		};

		processSection(json.sections);

		// Reload browsers
		browserSync.reload();

		if (errors < 1) {
			Wee.notify({
				title: 'Generation Complete',
				message: 'Static site successfully built'
			});
		}
	});
};