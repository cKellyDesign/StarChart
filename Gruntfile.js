module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    express: {
      dev: {
        options: {
          script: 'StarServer.js',
          port: 8089
        }
      }
    }, 

    watch: {
      files: {
        files: ['**.js'],
        tasks: ['express:dev'],
        options: {
          livereload: true
        }
      }
    }

  });
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['express:dev','watch']);
};