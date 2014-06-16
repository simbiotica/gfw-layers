define([
  'jquery',
  'underscore',
  'backbone',
  'mps',
  'gmap',
  'presenter'
], function ($, _, Backbone, mps, gmap, presenter) {
  
  var Router = Backbone.Router.extend({

    routes: {
      ':baseLayer/:zoom/:mapType/': 'home',
      ':baseLayer/:zoom/:mapType': 'home',
      '*path': 'home'
    },

    initialize: function() {
      console.log('router.initialize()')
      mps.subscribe('navigate', _.bind(function (place) {
        this.path = place.path;
        delete place['path'];
        this.navigate(this.path, place);
      }, this));
    },

    home: function (baseLayer, zoom, mapType) {
      presenter.setFromUrl(arguments);
    }
  });

  var router = new Router();

  return router;

});