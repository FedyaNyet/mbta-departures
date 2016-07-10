module.exports = function(grunt) {

    grunt.initConfig({
        express: {
            dev: {
                options: {
                    script: 'index.js'
                }
            },
        },

        watch: {
            options: {
                livereload: true
            },
            express: {
                files:  [ 'index.js', 'routes/*', 'public/*' ],
                tasks:  [ 'express:dev' ],
                options: {
                    spawn: false
                }
            },
        }
    });
    
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['express:dev','watch']);
};