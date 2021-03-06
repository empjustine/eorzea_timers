/*global module:false*/
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        config: {
            app: './assets/js/app',
            src: './assets',
            lib: './bower_components',
            dist: './dist'
        },
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
            ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
        // Task configuration.
        connect: {
            server: {
                options: {
                    path: 'www-root',
                    keepalive: true,
                    port: 9000,
                    base: {
                        path: './dist',
                        options: {
                            index: 'index.html'
                        }
                    }
                }
            }
        },
        concat: {
            lib: {
                src: [
                    '<%= config.lib %>/jquery/dist/jquery.js',
                    '<%= config.lib %>/async/lib/async.js',
                    '<%= config.lib %>/bootstrap-sass/assets/javascripts/bootstrap.js',
                    '<%= config.lib %>/underscore/underscore.js',
                    '<%= config.lib %>/backbone/backbone.js',
                    '<%= config.lib %>/backbone.localStorage/backbone.localStorage.js',
                    '<%= config.lib %>/handlebars/handlebars.runtime.js',
                    '<%= config.lib %>/swag/lib/swag.js',
                    '<%= config.lib %>/backbone.wreqr/lib/backbone.wreqr.js',
                    '<%= config.lib %>/backbone.marionette/lib/backbone.marionette.js',
                    '<%= config.lib %>/moment/moment.js',
                    '<%= config.lib %>/isotope/dist/isotope.pkgd.js',
                    '<%= config.lib %>/fuse.js/src/fuse.js',
                    '<%= config.lib %>/parsleyjs/dist/parsley.js'
                ],
                dest: '<%= config.dist %>/js/lib.js'
            },
            main: {
                src: [
                    '<%= config.src %>/js/helpers/{,**/}*.js',
                    '<%= config.src %>/js/*.js'
                ],
                dest: '<%= config.dist %>/js/main.js'
            },
            app: {
                src: [
                    '<%= config.src %>/js/app/app.js',
                    '<%= config.src %>/js/app/router.js',
                    '<%= config.src %>/js/app/views/{,**/}*.js',
                    '<%= config.src %>/js/app/components/{,**/}*.js',
                    '<%= config.src %>/js/app/modules/{,**/}*.js',
                    '<%= config.src %>/js/app/{,**/}*.js'
                ],
                dest: '<%= config.dist %>/js/app.js'
            }
        },
        watch: {
            options: {
                event: ['changed', 'added', 'deleted']
            },
            gruntfile: {
                files: [
                    '<%= config.src %>/js/{,**/}*.js'
                ],
                tasks: ['concat']
            },
            handlebars: {
                files: ['<%= config.app %>/templates/{,**/}*.hbs'],
                tasks: ['exec:handlebars']
            },
            css: {
                files: [
                    '<%= config.src %>/scss/{,**/}*'
                ],
                tasks: ['exec:sass']
            },
            html: {
                files: ['*.html'],
                tasks: ['copy:html']
            },
            files: {
                files: [
                    '<%= config.src %>/sound/**/*',
                    '<%= config.src %>/data/**/*',
                    '<%= config.src %>/img/**/*',
                ],
                tasks: ['copy:assets']
            },
            fonts: {
                files: [
                    '<%= config.src %>/fonts/**/*',
                ],
                tasks: ['copy:fonts']
            },
            tests: {
                files: [
                    './tests/**/*',
                ],
                tasks: ['copy:test']
            }
        },
        exec: {
            handlebars: 'handlebars <%= config.app %>/templates/{,**/}*.hbs -f <%= config.dist %>/js/templates.js -r <%= config.app %>/templates',
            sass: 'mkdir -p <%= config.dist %>/css && sass <%= config.src %>/scss/main.scss <%= config.dist %>/css/main.css'
        },
        copy: {
            assets: {
                files: [{
                    expand: true,
                    flatten: true,
                    src: ['<%= config.src %>/img/**/*'],
                    dest: '<%= config.dist %>/img'
                }, {
                    expand: true,
                    flatten: true,
                    src: ['<%= config.src %>/sound/**/*'],
                    dest: '<%= config.dist %>/sound'
                }, {
                    expand: true,
                    flatten: true,
                    src: ['<%= config.src %>/data/**/*'],
                    dest: '<%= config.dist %>/data'
                }]
            },
            fonts: {
                files: [{
                    expand: true,
                    flatten: true,
                    src: [
                        '<%= config.lib %>/font-awesome/fonts/*'
                    ],
                    dest: '<%= config.dist %>/fonts'
                }]
            },
            html: {
                files: [{
                    expand: true,
                    src: ['*.html', 'CNAME'],
                    dest: '<%= config.dist %>/'
                }]
            },
            test: {
                files: [{
                    expand: true,
                    src: ['./tests/**/*'],
                    dest: '<%= config.dist %>'
                }]
            }
        },
        clean: {
            dist: ['<%= config.dist %>']
        }

    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-exec');

    // Default task.
    grunt.registerTask('default', ['clean', 'copy', 'concat', 'exec:handlebars', 'exec:sass', 'watch']);

};