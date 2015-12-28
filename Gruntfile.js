module.exports = function(grunt) {
    var path = require('path');
    grunt.initConfig({
        bower: {
            install: {
                options: {
                    targetDir: './libs',
                    layout:"byType",
                    install: true,
                    verbose: true,
                    cleanTargetDir: true,
                    cleanBowerDir: false,
                    bowerOptions: {}
                }
            }
        }
    });
    require('load-grunt-tasks')(grunt);
    grunt.registerTask('bowercopy', ['bower']);
};
