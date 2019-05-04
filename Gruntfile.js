/* eslint-disable camelcase */
module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['./app/collections/links.js', './app/collections/users.js', './app/models/link.js', './app/models/user.js', './app/config.js', './lib/request-handler.js', './lib/utility.js', './public/client/app.js', './public/createLinkView.js', './public/client/link.js', './public/client/links.js', './public/client/linksView.js', './public/client/linkView.js', './public/client/router.js', './public/lib/backbone.js', './public/lib/handlebars.js', './public/lib/jquery.js', './public/lib/underscore.js', './test/ServerSpec.js', './server.js'],
        dest: './dist/build.js',
      },
    },

    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['test/**/*.js']
      }
    },

    nodemon: {
      dev: {
        script: 'server.js'
      }
    },

    uglify: {
      myTarget: {
        files: {
          './dist/build.js': ['./app/collections/links.js', './app/collections/users.js', './app/models/link.js', './app/models/user.js', './app/config.js', './lib/request-handler.js', './lib/utility.js', './public/client/app.js', './public/createLinkView.js', './public/client/link.js', './public/client/links.js', './public/client/linksView.js', './public/client/linkView.js', './public/client/router.js', './public/lib/backbone.js', './public/lib/handlebars.js', './public/lib/jquery.js', './public/lib/underscore.js', './test/ServerSpec.js', './server.js']
        }
      }
    },

    eslint: {
      target: [
        
      ]
    },

    cssmin: {
    },

    watch: {
      scripts: {
        files: [
          'public/client/**/*.js',
          'public/lib/**/*.js',
        ],
        tasks: [
          'concat',
          'uglify'
        ]
      },
      css: {
        files: 'public/*.css',
        tasks: ['cssmin']
      }
    },

    shell: {
      prodServer: {
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-nodemon');


  grunt.registerTask('server-dev', function (target) {
    grunt.task.run(['nodemon', 'watch']);
  });

  ////////////////////////////////////////////////////
  // Main grunt tasks
  ////////////////////////////////////////////////////

  grunt.registerTask('test', [
    'mochaTest'
  ]);
 
  grunt.registerTask('build', [
  ]);

  grunt.registerTask('upload', function (n) {
    if (grunt.option('prod')) {
      // add your production server task here
    } else {
      grunt.task.run(['server-dev']);
    }
  });

  grunt.registerTask('deploy', [
    // add your deploy tasks here
  ]);


};
