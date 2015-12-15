module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        webfont: {
            icons: {
                src: 'svg/*.svg',
                dest: 'font',
                destCss: 'css',
                options: {
                    font: 'MyIcon',
                    types: 'ttf',
                    codepointsFile: 'codepoints.json',
                    centerHorizontally : true,
                    htmlDemo: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-webfont');

    grunt.registerTask('default', ['webfont']);
};
