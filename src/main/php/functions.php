<?php

class SinglePageApplicationTheme {

  function enqueueScript() {
    wp_enqueue_script('jquery');
    wp_enqueue_script('requirejs-config');
    wp_enqueue_script('main');

    // Add the WP_DIRECTORY object directory.path to the script requirejs-config.
    // It allows us to configure the baseUrl of requirejs dynamically.
    //
    // Please refer to http://requirejs.org/docs/api.html#config
    $WP_DIRECTORY = array('path' => get_stylesheet_directory_uri());
    wp_localize_script('requirejs-config', 'directory', $WP_DIRECTORY);
  }

  function __construct() {
    if (! is_admin()) {
      wp_register_script('requirejs-config', get_stylesheet_directory_uri() . '/js/requirejs-config.js', array(), '', true);
      wp_register_script('requirejs', get_stylesheet_directory_uri() . '/js/lib/require.js', array('requirejs-config'), '', true);
      wp_register_script('main', get_stylesheet_directory_uri() . '/js/main.js', array('requirejs'), '', true);
      add_action( 'wp_enqueue_scripts', array($this, 'enqueueScript'));
    }
  }
}

$singlePageApplicationTheme = new SinglePageApplicationTheme();

?>
