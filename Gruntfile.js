module.exports = function(grunt) {

  var path = require('path');

  grunt.initConfig({
    express: {
      dev: {
        server: path.resolve(__dirname, 'server.js')
      }
    },
    watch: {
      express: {
        files:  [ '**/*.js' ],
        tasks:  [ 'express:dev' ],
        options: {
          nospawn: true //Without this option specified express won't be reloaded
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-express');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('server', [ 'express', 'express-keepalive' ]);
};
