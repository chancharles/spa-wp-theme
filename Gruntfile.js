/*global module*/
module.exports = function (grunt) {
  'use strict';

  var pkg = grunt.file.readJSON('package.json');

  var targetDir = 'target/' + pkg.name;

  grunt.initConfig({
    pkg: pkg,
    requirejs: {
      main: {
        options: {
          findNestedDependencies: true,
          mainConfigFile: targetDir + '/js/main.js',
          baseUrl: targetDir + '/js',
          name: 'main',
          out: targetDir + '/js/compiled.js',
          optimize: 'none'
        }
      }
    },
    compass: {
      main: {
        options: {
          sassDir: 'src/main/scss',
          cssDir: targetDir,
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
        dest: targetDir + '/'
      },
      js: {
        expand: true,
        cwd: 'src/main/js/',
        src: '**',
        dest: targetDir + '/js/'
      },
      lib: {
        files: [
          {
            src: [ 'node_modules/lodash/lodash.js' ],
            dest: targetDir + '/js/lib/lodash.js'
          },
          {
            src: [ 'node_modules/requirejs/require.js' ],
            dest: targetDir + '/js/lib/require.js'
          },
          {
            src: [ 'node_modules/handlebars/dist/handlebars.runtime.js' ],
            dest: targetDir + '/js/lib/handlebars.runtime.js'
          }
        ]
      }
    },
    clean: {
      main: [ "target" ]
    },
    handlebars: {
      options: {
        amd: true,
        namespace: pkg.name + '.Templates',
        processName: function (filePath) {
          return filePath.replace(/^src\/main\/hbs\//, '').replace(/\.hbs$/, '');
        }
      },
      main: {
        files: [
          {
            src: [ 'src/main/hbs/**/*.hbs' ],
            dest: targetDir + '/js/hbs/Templates.js'
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-handlebars');

  // this would be run by typing "grunt test" on the command line
  grunt.registerTask('test', ['jshint', 'qunit']);

  // the default task can be run just by typing "grunt" on the command line
  grunt.registerTask('default', ['jshint', 'compass', 'handlebars', 'copy', 'requirejs', 'qunit']);

};
