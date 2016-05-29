module.exports = function (grunt) {
  "use strict";

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    babel: {
      dist: {
        files: {
          'dist/react-crs.js': 'source/react-crs.jsx'
        },
        options: {
          presets: ['react', 'es2015']
        }
      }
    },

    browserify: {
      test: {
        src: [
          './dist/react-crs.js',
          './test/index.jsx'
        ],
        dest: './test/build.js',
        options: {
          browserifyOptions: { debug: true },
          transform: [["babelify", { "presets": ["es2015", "react"] }]]
        }
      }
    }

  });

  grunt.registerTask('default', ['babel:dist', 'browserify:test']);

};
