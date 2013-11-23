requirejs.config({
  paths: {
    lodash: 'lib/lodash',
    jquery: 'jquery-1.9.0'
  },
  shim: {
    'backbone': {
      //These script dependencies should be loaded before loading
      //backbone.js
      deps: ['lodash'],
      //Once loaded, use the global 'Backbone' as the
      //module value.
      exports: 'Backbone'
    }
  }
});

/*
 * As a Wordpress theme, the jQuery library may have been loaded by another plugin, we need to prevent loading
 * the library twice.
 */
if (typeof jQuery === 'function') {
  define('jquery', function () { return jQuery; });
}

// Start the main app logic.
requirejs([ 'app/entry' ], function (entry) {
  entry.render();
});
