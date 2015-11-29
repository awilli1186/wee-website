---
name: Tasks
heading: Command line tasks for compiling your project
---

---code|label:Default---

Simply run ```grunt``` from the command line to build your project once. This compiles and minifies all assets.

```bash
grunt
```

---code|label:Static Server---

Running ```grunt static``` will continuously compile your CSS and JavaScript changes on the fly, launch a local web server, serve the static HTML files in the specified project root, and reload as necessary.

```bash
grunt static
```

---code|label:Local Server---

For more advanced needs, you will probably need to run your own local server to serve PHP and/or MySQL with something like [MAMP](http://www.mamp.info/) (OS X) or [EasyPHP](http://www.easyphp.org/) (Windows). In that case you would use the ```grunt local``` command. This uses the proxy settings you have specified in the [project.json](/build/config#general) file and proxy to your local web server. As with the "static" command, grunt will continuously watch and compile your changes as you make them and reload your browser as necessary.

```bash
grunt local
```
---code|label:Validate---
 
Validate the current projects JavaScript source against defined standards. [Read more](/build/validation) about validation.

```bash
grunt validate
```

---code|label:Generate---

This task will generate the static site on demand. [Read more](/generator) about static generation.

```bash
grunt generate
```

---code|label:Update---

The update task will notify you if there is a newer version of Wee available.

```bash
grunt update
```