module.exports = function (grunt) {
  "use strict";

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    babel: {
      dist: {
        files: {
          'dist/react-crs.js': 'source/react-crs.jsx'
        }
      },

      //test: {
      //  files: {
      //    'test/build.js': 'test/index.js'
      //  }
      //}
    },

    browserify: {
      test: {
        src: [
          "./test/index.js"
        ],
        dest: './test/build.js',
        options: {
          browserifyOptions: { debug: true },
          transform: [["babelify", { "presets": ["es2015"] }]]
          //plugin: [
          //  ["factor-bundle", { outputs: [
          //    "./dist/js/main-home.js",
          //    "./dist/js/main-products.js"
          //  ] }]
          //]
        }
      }
    }

  });

  grunt.registerTask('default', ['babel:dist']);
  grunt.registerTask('test', ['browserify:test']);

};
