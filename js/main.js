require.config({ 

  baseUrl: '/js',
  
  paths: {
    jquery: ['lib/jquery'],
    underscore: ['lib/underscore'],
    backbone: ['lib/backbone'],
    mps: ['lib/minpubsub'],
    backbonequeryparams: ['lib/backbone.queryparams'],
    gmap: ['app/gmap'],
    cartodb: ['lib/cartodb'],
    store: ['lib/store'],
    text: ['lib/text'],
    oop: ['lib/class'],
    app: ['app/app'],
    router: ['app/router'],
    mediator: ['app/mediator'],
    views: ['app/views'],
    models: ['app/models']
  },
  
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone',
    },
    backbonequeryparams: {
      deps: ['backbone', 'underscore'],
      exports: 'backbonequeryparams'
    },
    app: {
      deps: ['mps'],
      exports: 'app'
    },
    user: {
      deps: ['oop']
    },
    oop: {
      deps: [],
      exports: 'oop',
      init: function() {
        var oop = {
          Class: window.Class
        };
        return oop;
      }
    },
    mps: {
      deps: ['jquery', 'underscore'],
      exports: 'mps',
      init: function(foo) {
        var mps = {
          subscribe: window.subscribe,
          unsubscribe: window.unsubscribe,
          publish: window.publish
        };
        return mps;
      }
    }
  }
});


// Application entry point:
require(['app'], function (app) {
  console.log('Main entry point ...');
  app.init();
});