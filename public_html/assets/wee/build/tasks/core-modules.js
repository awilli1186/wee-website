module.exports = function(grunt) {
	grunt.registerTask('configModules', function() {
		// Set global config
		modules = {
			rootPath: config.assetPath + '/modules'
		};

		// Loop through module directories
		var children = fs.readdirSync(modules.rootPath);

		for (var directory in children) {
			var name = children[directory],
				modulePath = modules.rootPath + '/' + children[directory];

			// Ensure the child is a directory
			if (fs.statSync(modulePath).isDirectory()) {
				var configFile = modulePath + '/module.json';

				// Ensure the module.json file exists
				if (grunt.file.exists(configFile)) {
					// Get module config
					var module = grunt.file.readJSON(configFile),
						moduleScript = [
							modulePath + '/module/script/*.js'
						],
						vars = JSON.parse(JSON.stringify(style.vars)),
						less = grunt.file.read(config.assetPath + '/wee/style/wee.module.less');

					// Set module variables
					vars.moduleName = name;
					vars.responsive = false;

					// Template variables
					var inject = '@import "../../modules/' + name + '/module/style/screen.less";\n',
						responsive = '';

					// Build additional style
					if (module.style && module.style.build) {
						module.style.build.forEach(function(filepath) {
							inject += '@import "../../modules/' + name + '/' + filepath + '";\n';
						});
					}

					// Build additional script
					if (module.script && module.script.build) {
						module.script.build.forEach(function(filepath) {
							moduleScript.push(path.join(modulePath, filepath));
						});
					}

					// Determine if module is responsive
					if (project.style.core.responsive.enable) {
						if (fs.existsSync(modulePath + '/module/style/breakpoints')) {
							vars.responsive = true;

							responsive += ' \
								.mobile-landscape () when not (@mobileLandscapeWidth = false) { \
									@import "../../modules/' + name + '/module/style/breakpoints/mobile-landscape.less"; \
								} \
								.tablet-portrait () when not (@tabletPortraitWidth = false) { \
									@import "../../modules/' + name + '/module/style/breakpoints/tablet-portrait.less"; \
								} \
								.desktop-small () when not (@desktopSmallWidth = false) { \
									@import "../../modules/' + name + '/module/style/breakpoints/desktop-small.less"; \
								} \
								.desktop-medium () when not (@desktopMediumWidth = false) { \
									@import "../../modules/' + name + '/module/style/breakpoints/desktop-medium.less"; \
								} \
								.desktop-large () when not (@desktopLargeWidth = false) { \
									@import "../../modules/' + name + '/module/style/breakpoints/desktop-large.less"; \
								} \
							';
						}

						if (fs.existsSync(modulePath + '/css/breakpoints')) {
							vars.responsive = true;

							responsive += ' \
								.mobile-landscape () when not (@mobileLandscapeWidth = false) { \
									@import "../../modules/' + name + '/css/breakpoints/mobile-landscape.less"; \
								} \
								.tablet-portrait () when not (@tabletPortraitWidth = false) { \
									@import "../../modules/' + name + '/css/breakpoints/tablet-portrait.less"; \
								} \
								.desktop-small () when not (@desktopSmallWidth = false) { \
									@import "../../modules/' + name + '/css/breakpoints/desktop-small.less"; \
								} \
								.desktop-medium () when not (@desktopMediumWidth = false) { \
									@import "../../modules/' + name + '/css/breakpoints/desktop-medium.less"; \
								} \
								.desktop-large () when not (@desktopLargeWidth = false) { \
									@import "../../modules/' + name + '/css/breakpoints/desktop-large.less"; \
								} \
							';
						}
					}

					// Process import injection
					less = less.replace('{{imports}}', inject)
						.replace('{{responsive}}', responsive);

					// Write temporary file
					grunt.file.write(config.tempPath + '/' + name + '.less', less);

					// Create module style compile task
					var dest = (module.autoload === true) ?
							config.assetPath + '/wee/temp/' + name + '.css' :
							modulePath + '/screen.min.css',
						obj = {};

					obj[name] = {
						files: [{
							dest: dest,
							src: config.tempPath + '/' + name + '.less'
						}],
						options: {
							modifyVars: vars
						}
					};

					grunt.config.merge({
						less: obj
					});

					// Push style task
					style.tasks.push('less:' + name);

					// Configure style watch task
					grunt.config.set('watch.' + name + '-style', {
						files: modulePath + '/**/*.less',
						tasks: [
							'less:' + name,
							'concat:style'
						]
					});

					if (module.autoload === true) {
						// Push temporary style to concat list
						style.concat.push(dest);

						// Add script paths to uglify
						script.files = script.files.concat(moduleScript);
					} else {
						// Create module style compile task
						obj[name] = {
							files: [{
								dest: modulePath + '/script.min.js',
								src: moduleScript
							}]
						};

						grunt.config.merge({
							uglify: obj
						});

						// Configure script watch task
						grunt.config.set('watch.' + name + '-script', {
							files: moduleScript,
							tasks: [
								'uglify:' + name
							]
						});

						// Execute script task
						grunt.task.run('uglify:' + name);
					}
				} else {
					Wee.notify({
						title: 'Module Error',
						message: 'Missing module.json for "' + name + '" module.'
					}, 'error');

					grunt.fail.fatal('Missing module.json for "' + name + '" module.');
				}
			}
		}
	});
};