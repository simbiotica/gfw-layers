require.config({ 

  baseUrl: '../js',
  
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
    uri: ['lib/uri'],
    app: ['app/app'],
    nsa: ['app/nsa'],
    moment: ['lib/moment'],
    analysis: ['app/analysis'],
    router: ['app/router'],
    mediator: ['app/mediator'],
    presenter: ['app/presenter'],
    views: ['app/views'],
    models: ['app/models'],
    collections: ['app/collections'],
    
    spec: ['../test/spec'],
    helpers: ['../test/helpers'],
    jasmine: ['../test/lib/jasmine'],
    jasmine_html: ['../test/lib/jasmine-html'],
    jasmine_boot: ['../test/lib/boot'],
    mock_ajax: ['../test/lib/mock-ajax']
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
    uri: {
      exports: 'UriTemplate',
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

require(
['spec/analysis_spec', 'mock_ajax'], 
function(){
  // NOOP
});