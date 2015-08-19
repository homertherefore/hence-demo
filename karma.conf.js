// Karma configuration
// Generated on Tue Jul 07 2015 09:35:08 GMT-0400 (EDT)

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: [
      'browserify',
      'mocha',
      'chai-as-promised',
      'sinon-chai'
    ],

    plugins: [
      "karma-babel-preprocessor",
      "karma-browserify",
      "karma-chai",
      "karma-chai-as-promised",
      "karma-chrome-launcher",
      "karma-firefox-launcher",
      "karma-mocha",
      "karma-mocha-reporter",
      "karma-sinon-chai",
      "browserify",
      "babelify",
      "watchify"
    ],


    // list of files / patterns to load in the browser
    files: [
      'src/**/*.js',
      'test/unit/**/*.js'
    ],


    // list of files to exclude
    exclude: [],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/**/*.js': ['browserify'],
      'test/unit/**/*.js': ['browserify']
    },
    browserify: {
      debug: true,
      transform: ['babelify']
    },
    watchify: {
      poll: true
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome', 'Firefox'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  })
};
