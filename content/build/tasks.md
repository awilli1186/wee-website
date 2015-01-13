---
name: Tasks
description: Command line tasks for compiling your project
---

### Default

Simply run "grunt" from the command line to build your project once. This compiles all assets.

```bash
grunt
```

### Static Server

Running "grunt static" will continuously compile your CSS and JavaScript changes on the fly, run a local web server, and serve the static HTML files in the specified project root, and reload as necessary.

```bash
grunt static
```

### Local Server

For more advanced needs, you will probably need to run your own local server to serve PHP and/or MySQL with something like [MAMP](http://www.mamp.info/) (OS X) or [EasyPHP](http://www.easyphp.org/) (Windows). In that case you would use the ```grunt local``` command. This uses the proxy settings you have specified in the ```project.json``` file and proxy to your local web server. As with the "static" command, grunt will continuously watch and compile your changes as you make them and reload your browser as necessary.

```bash
grunt local
```
### Validate

```bash
grunt validate
```

### Generate

```bash
grunt generate
```

### Update

```bash
grunt update
```