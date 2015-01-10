/**
 * Created by brentonmcsweyn on 11/01/15.
 */


module.exports = function (grunt) {
    "use strict";

    grunt.initConfig({
        jshint : {
          files:  ['lib/**/*.js', 'models/**/*.js']
        },
        watch: {
            files : ['lib/**/*.js', 'models/**/*.js']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
};
