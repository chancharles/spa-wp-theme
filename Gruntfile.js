/*global module*/
module.exports = function (grunt) {
  'use strict';

  var pkg = grunt.file.readJSON('package.json');

  grunt.initConfig({
    pkg: pkg,
    requirejs: {
      main: {
        options: {
          findNestedDependencies: true,
          mainConfigFile: 'src/main/js/main.js',
          baseUrl: 'src/main/js',
          name: 'main',
          out: 'target/' + pkg.name + '/js/compiled.js',
          optimize: 'none'
        }
      }
    },
    compass: {
      main: {
        options: {
          sassDir: 'src/main/scss',
          cssDir: 'target/' + pkg.name,
          environment: 'production'
        }
      }
    },
    qunit: {
      files: ['src/test/**/*.html']
    },
    jshint: {
      // define the files to lint
      files: ['Gruntfile.js', 'src/main/js/app/**/*.js', 'src/test/js/app/**/*.js', 'src/main/js/main.js'],
      // configure JSHint (documented at http://www.jshint.com/docs/)
      options: {
        // more options here if you want to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'qunit']
    },
    copy: {
      main: {
        /*
         * expand is required for the expanded options (cwd, src, dest)
         * http://gruntjs.com/configuring-tasks#building-the-files-object-dynamically
         */
        expand: true,
        cwd: 'src/main/php/',
        src: '**',
        dest: 'target/' + pkg.name + '/'
      },
      js: {
        expand: true,
        cwd: 'src/main/js/',
        src: '**',
        dest: 'target/' + pkg.name + '/js/'
      }
    },
    clean: {
      main: [ "target" ]
    }
  });

  // Load tasks from "grunt-sample" grunt plugin installed via Npm.
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // this would be run by typing "grunt test" on the command line
  grunt.registerTask('test', ['jshint', 'qunit']);

  // the default task can be run just by typing "grunt" on the command line
  grunt.registerTask('default', ['jshint', 'qunit', 'requirejs', 'compass', 'copy']);

};
