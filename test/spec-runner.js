require.config({ 

  baseUrl: '../js',
  
  paths: {
    jquery: ['lib/jquery'],
    underscore: ['lib/underscore'],
    backbone: ['lib/backbone'],
    mps: ['lib/minpubsub'],
    backbonequeryparams: ['lib/backbone.queryparams'],
    gmap: ['app/gmap'],
    cartodb: ['lib/cartodb'],
    d3: ['lib/d3'],
    backbone_cartodb: ['lib/backbone.cartodb'],    
    store: ['lib/store'],
    text: ['lib/text'],
    oop: ['lib/class'],
    app: ['app/app'],
    router: ['app/router'],
    mediator: ['app/mediator'],
    presenter: ['app/presenter'],
    views: ['app/views'],
    models: ['app/models'],
    collections: ['app/collections'],
    spec: ['../test/spec'],
    helpers: ['../test/helpers']
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

require([], function(){
  var jasmineEnv = jasmine.getEnv();

  var htmlReporter = new jasmine.HtmlReporter();

  jasmineEnv.addReporter(htmlReporter);

  // Add links to the spec files here
  var specs = [];
  specs.push('spec/app_spec');
  specs.push('spec/router_spec');

  // Execute specs
  require(specs, function(){
    jasmineEnv.execute();
  });
 
});