require.config({ 

  baseUrl: '/js',
  
  paths: {
    jquery: ['lib/jquery'],
    underscore: ['lib/underscore'],
    backbone: ['lib/backbone'],
    mps: ['lib/minpubsub'],
    backbonequeryparams: ['lib/backbone.queryparams'],
    gmap: ['app/gmap'],
    d3: ['lib/d3'],
    backbone_cartodb: ['lib/backbone.cartodb'],
    cartodb: ['lib/cartodb'],
    store: ['lib/store'],
    text: ['lib/text'],
    Class: ['lib/class'],
    app: ['app/app'],
    moment: ['lib/moment'],
    router: ['app/router'],
    mediator: ['app/mediator'],
    presenter: ['app/presenter'],
    views: ['app/views'],
    models: ['app/models'],
    collections: ['app/collections']
  },
  
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone',
    },
    backbone_cartodb: {
      deps: ['underscore', 'backbone'],
      exports: 'backbone_cartodb'
    },
    backbonequeryparams: {
      deps: ['backbone', 'underscore'],
      exports: 'backbonequeryparams'
    },
    Class: {
      exports: 'Class',
    },    
    app: {
      deps: ['mps', 'Class'],
      exports: 'app'
    },
    user: {
      deps: ['Class']
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
require([
  'app',
  'router',
  'presenter',
  'mediator',
  'backbone'
], function (app, router, presenter, mediator, Backbone) {
  console.log('Main entry point...', app);
  if (!Backbone.History.started) {
    console.log('Backbone.history.start');
    Backbone.history.start({pushState: true});
  }
  window.app = app;
  window.router = router;
});