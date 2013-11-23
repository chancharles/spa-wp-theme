If you are looking for a minimal single page application (SPA) theme with WordPress, you have come to the right place.

Build
-----
We use Grunt (http://gruntjs.com/) to manage all the build tasks. The ```Gruntfile.js``` file is your entry point to the build. Dependencies are resolved using ```npm```.

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
The entry point for a WordPress theme is the ```index.php``` file. Most of the magic, however, happens in the ```functions.php```. We demonstrate a few techniques here:

1. Using PHP Class to encapsulate the theme logic to avoid name collision.
2. Configure a proper URL (```baseUrl```) for RequireJS to load its dependencies. You will want to look at ```src/main/js/requirejs-config.js``` together with ```functions.php```.
3. Using jQuery with RequireJS in a WordPress environment. The jQuery library is enqueued in ```functions.php``` and is detected to avoid duplicate loading in ```src/main/js/main.js``` file.

JavaScript
----------
This theme is configured to use RequireJS (http://requirejs.org/) for modularity. Your application's entry point resides in ```src/main/js/app/entry.js```. It is invoked by the RequireJS main JS file under ```src/main/js/main.js```.

Currently, the theme is configured to load the individual JS files dynamically but you can easily change the ```functions.php``` file to load the compiled JS (```target/spa-wp-theme/js/compiled.js```). Ideally, you should change the ```functions.php``` file such that it can detect a request parameter like ```?debug=true``` to dynamically load the JS files. This is left as an exercise for the user.

For Unit Testing, we have configured QUnit (http://qunitjs.com/) to run on every build. The test files are in ```src/test``` folder.

CSS/Sass
--------
We use Compass (http://compass-style.org/) and Sass (http://sass-lang.com/) to bring some sanity to CSS authoring. The files are located in ```src/main/scss``` and is configured to compile with Grunt automatically.

Last Words
----------
I hope this theme is helpful and gives you a headstart in configuring your Single Page Application WordPress theme. If you are interested in this theme, you may also be interested in some recent development on a JSON REST API for WordPress (https://github.com/WP-API/WP-API). 

Most of the ideas/technicques are "borrowed" from people on the internet one way or the other. Please look at the References section below for where the credits are due.

References
----------
[1] Loading conditional libraries in WordPress with RequireJS (http://dstrunk.com/loading-conditional-libraries-in-wordpress-with-requirejs/)

[2] Using requirejs in WordPress - wp_enqueue_scripts (https://github.com/jrburke/requirejs/issues/622)
