If you are looking to develop a single page application (SPA) theme with WordPress, you would find this project useful.

Build
-----
This project uses Grunt (http://gruntjs.com/) to manage all the build tasks. The ```Gruntfile.js``` file is your entry
point to the build. Dependencies are resolved using ```npm```.

To build this theme, simply type the following in your command line:

```
% cd spa-wp-theme

(install dependencies, you only need to do it once)
% npm install

(run grunt to build the theme in the "target" directory)
% grunt
```

PHP
---
Each WordPress theme has a ```index.php``` file. Most of the magic, however, happens in the
```functions.php``` file. This project demonstrates the following techniques:

1. Using PHP Class to encapsulate the theme logic to avoid name collision.
2. Configure a proper URL (```baseUrl```) for RequireJS to load its dependencies. You will want to look at
```src/main/js/requirejs-config.js``` together with ```functions.php```.
3. Using jQuery with RequireJS in a WordPress environment. The jQuery library is enqueued in ```functions.php```
and is detected to avoid duplicate loading in ```src/main/js/main.js``` file.

JavaScript
----------
This project uses RequireJS (http://requirejs.org/) for code modularity. The application's entry point
resides in ```src/main/js/app/entry.js```. It is invoked by the RequireJS main JS file under ```src/main/js/main.js```.

Currently, each individual JS file is dynamically loaded but you can easily change it to load the compiled JS
(```target/spa-wp-theme/js/compiled.js```) by modifying the ```functions.php``` file.

For Unit Testing, QUnit (http://qunitjs.com/) is setup to run on every build. The test files are in
```src/test``` folder.

Templates/Handlebars
--------------------
Handlebars has been chosen as the JavaScript template engine. You can see how the project uses the
```grunt-contrib-handlebars``` plugin to pre-compile the Handlebars files and how they are injected as dependencies
by RequireJS in the ```src/main/js/app/screen/home.js``` file.

CSS/Sass
--------
Compass (http://compass-style.org/) and Sass (http://sass-lang.com/) are used to bring some sanity to CSS authoring.
The files are located in ```src/main/scss```. They are configured to compile with Grunt on every build.

Last Words
----------
I hope this project is helpful and gives you a idea of how to setup a Single Page Application WordPress theme.
If you are interested in this theme, you may also be interested in some recent development on a JSON REST API for
WordPress (https://github.com/WP-API/WP-API).

Most of the ideas/techniques are taken from people on the internet one way or the other. Please look at the
References section below for where the credits are due.

References
----------
[1] Loading conditional libraries in WordPress with RequireJS (http://dstrunk.com/loading-conditional-libraries-in-wordpress-with-requirejs/)

[2] Using requirejs in WordPress - wp_enqueue_scripts (https://github.com/jrburke/requirejs/issues/622)
