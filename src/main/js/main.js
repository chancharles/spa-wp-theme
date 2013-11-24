requirejs.config({
  paths: {
    lodash: 'lib/lodash',
    // TODO: npm doesn't have a good jquery package yet.
    jquery: 'jquery-1.9.0',
    handlebars: 'lib/handlebars.runtime'
  },
  shim: {
    handlebars: {
      exports: "Handlebars"
    }
  }
});

/*
 * As a Wordpress theme, the jQuery library may have been loaded by another plugin, we need to prevent loading
 * the library twice.
 */
if (typeof jQuery === 'function') {
  define('jquery', function () {
    "use strict";
    return jQuery;
  });
}

// Start the main app logic.
requirejs([ 'app/entry' ], function (entry) {
  "use strict";
  entry.render();
});
