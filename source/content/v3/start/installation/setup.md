---
name: Setup
---

There are a couple tools you'll need to start and compile a Wee project.

The first tool you'll need is [Node.js](http://www.nodejs.org/).  If you think you may already have Node installed, open Terminal (Mac) or Command Line (Windows) and type `node -v` to execute a command that checks the version.

If Node responds, check that version against the latest version at [Nodejs.org](http://www.nodejs.org/).  If you get no response, or if you have an older version, then download and install the latest version.  Node also includes npm (Node Package Manager) which is used to install dependencies.

Next, you'll need to install the Grunt CLI (Command Line Interface) globally using npm.  To do this, you may need to use sudo (OS X, *nix, BSD etc) or run Command Line as Administrator (Windows):

There are two ways to download Wee:
* [Download the latest release](https://github.com/weepower/wee/archive/master.zip) or
* Clone the repository from `git clone git://github.com/weepower/wee.git`

Next, you'll need to navigate to your project folder using Terminal or Command Line. You can do this by executing the command `cd path/to/your/project` or by typing `cd` width a space after and then dragging and dropping your project folder into the Terminal or Command Line window and then pressing enter. 

Once you've done that, execute the command `npm install`. npm should now be installing all the dependencies Wee needs.