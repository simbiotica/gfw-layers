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
    app: ['app/app'],
    nsa: ['app/nsa'],
    moment: ['lib/moment'],
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

require([], function(){
  var jasmineEnv = jasmine.getEnv();

  var htmlReporter = new jasmine.HtmlReporter();

  jasmineEnv.addReporter(htmlReporter);

  // Add links to the spec files here
  var specs = [];
  specs.push('spec/app_spec');
  //specs.push('spec/router_spec');

  // Execute specs
  require(specs, function(){
    jasmineEnv.execute();
  });
 
});