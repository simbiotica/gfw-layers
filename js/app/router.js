define([
  'jquery',
  'underscore',
  'backbone',
  'backbonequeryparams',
  'mps',
  'views/map',
  'gmap'
], function ($, _, Backbone, bqp, mps, MapView, gmap) {
  
  var Router = Backbone.Router.extend({

    routes: {
      '': 'map',
      ':baseLayer/:zoom/:mapType': 'map'
    },

    initialize: function(app) {
      console.log('router.initialize()')
      this.app = app;
      mps.subscribe('navigate', _.bind(function (place) {
        this.path = place.path;
        delete place['path'];
        this.navigate(this.path, place);
      }, this));
    },

    detachCurrentView: function() {
      var currentView = $('#content').children();
      if (!_.isEmpty(currentView)) {
        $(currentView).detach();
      }
    },

    map: function (baseLayer, zoom, mapType) {
      gmap.init(_.bind(function() {
        this.detachCurrentView();
        if (!this.mapView) {
          this.mapView = new MapView(this.app);
          $('#content').append(this.mapView.render().el);
          this.mapView.setup();
        } else {
          $('#content').append(this.mapView.el); 
          this.mapView.onShow();
        }
      }, this));
    },    

  });
  
  return Router;
});