/**
 * This file/module contains all configuration for the build process.
 */
module.exports = {
  /**
   * The `build_dir` folder is where our projects are compiled during
   * development and the `compile_dir` folder is where our app resides once it's
   * completely built.
   */
  build_dir: 'build',
  compile_dir: 'bin',

  /**
   * This is a collection of file patterns that refer to our app code (the
   * stuff in `src/`). These file paths are used in the configuration of
   * build tasks. `js` is all project javascript, less tests. `ctpl` contains
   * our reusable components' (`src/common`) template HTML files, while
   * `atpl` contains the same, but for our app's code. `html` is just our
   * main HTML file, `less` is our main stylesheet, and `unit` contains our
   * app's unit tests.
   */
  app_files: {
    js: [ 'src/**/*.js', '!src/**/*.spec.js', '!src/assets/**/*.js' ],
    jsunit: [ 'src/**/*.spec.js' ],
    
    atpl: ["src/app/**/*.tpl.html", "build/tmp/**/*.tpl.html"],
    ctpl: ["src/common/**/*.tpl.html"],

    atpl: [ 'src/app/**/*.tpl.html', 'build/tmp/**/*.tpl.html' ],
    ctpl: [ 'src/common/**/*.tpl.html' ],

    html: [ 'src/index.html' ],
    less: 'src/less/main.less'
  },

  /**
   * This is a collection of files used during testing only.
   */
  test_files: {
    js: [
      'vendor/angular-mocks/angular-mocks.js'
    ]
  },

  /**
   * This is the same as `app_files`, except it contains patterns that
   * reference vendor code (`vendor/`) that we need to place into the build
   * process somewhere. While the `app_files` property ensures all
   * standardized files are collected for compilation, it is the user's job
   * to ensure non-standardized (i.e. vendor-related) files are handled
   * appropriately in `vendor_files.js`.
   *
   * The `vendor_files.js` property holds files to be automatically
   * concatenated and minified with our project source files.
   *
   * The `vendor_files.css` property holds any CSS files to be automatically
   * included in our app.
   *
   * The `vendor_files.assets` property holds any assets to be copied along
   * with our app's assets. This structure is flattened, so it is not
   * recommended that you use wildcards.
   */
  vendor_files: {
    js: [
      'vendor/angular/angular.js',
      //'vendor-patches/angular-bootstrap/ui-bootstrap-tpls.min.js',
      'vendor/angular-bootstrap/ui-bootstrap-tpls.min.js',
      'vendor/placeholders/angular-placeholders-0.0.1-SNAPSHOT.min.js',
      'vendor/angular-ui-router/release/angular-ui-router.js',
      'vendor/angular-ui-utils/ui-utils.js',
	  'vendor/jquery/dist/jquery.js',
	  'vendor/jquery-ui/ui/jquery-ui.js',
	  //'vendor/angular-route/angular-route.js',
	  'vendor/restangular/dist/restangular.js',
	  'vendor/underscore/underscore.js',
	  //'vendor/angular-ui-router/release/angular-ui-router.js',
	  'vendor/fancybox/source/jquery.fancybox.js',
	  'vendor/angular-ui-grid/ui-grid.js',
	  'vendor/angular-cookies/angular-cookies.js',
      //'vendor/bootstrap-modal/js/*.js',
      'vendor/bootstrap/js/carousel.js',
      'vendor/bootstrap/js/transition.js',
      'vendor/bootstrap/js/collapse.js',
      'vendor/angular-local-storage/angular-local-storage.min.js',
      'vendor/jquery-xml2json/src/xml2json.js',
      'vendor/angulartics/dist/angulartics.min.js',
      'vendor/angulartics/dist/angulartics-segmentio.min.js',
      'vendor/ng-tags-input/ng-tags-input.min.js'
    ],
    css: [
        /* most/all of our stylesheets are compiled into on file from less files.
         The list of those is kept in src/main.less.
         The css section here is basically obsolete, and although I (JohnT) fixed some
         of the bugs, it doesn't fully work...typically you will have to manually copy
         the css files listed here to appropriate destinations both locally and on aws.
         Consider instead extending the list css_less in Gruntfile.js of css files
         automatically copied to .less, and adding to src/main.less. */
    ],
    assets: [
        'src/app/modules/static/landing/*.png',
        'src/app/modules/static/landing/*.jpg',
        'src/app/modules/static/landing/*.svg',
		'vendor/fancybox/source/*.png',
        'vendor/fancybox/source/*.gif',
        'vendor/bootstrap-css/fonts/*.*', //for glyphicons-halflings.*
        'vendor/angular-ui-grid/ui-grid.ttf',
        'vendor/angular-ui-grid/ui-grid.woff'
    ]
  }
};
