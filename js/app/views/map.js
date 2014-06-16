define([
  'backbone',
  'presenter',
  'gmap'
], function(Backbone, presenter, gmap) {

  var Map = Backbone.View.extend({
    initialize: function() {
      _.bindAll(this, 'onZoomChange');
      this.render();
    },

    render: function() {
      console.log('MAP');      
      gmap.init(_.bind(function() {
        var options = this.getMapOptions();
        options.center = new google.maps.LatLng(40.412568, -3.711133);
        options.minZoom = 3;
        this.map = new google.maps.Map(document.getElementById('map'), options);
        google.maps.event.addListener(this.map, 'zoom_changed', this.onZoomChange);
        this.resize();
      }, this));
    },

    updateMap: function() {
      this.map.setOptions(this.getMapOptions());
    },

    getMapOptions: function() {
      return {
        zoom: presenter.get('zoom'),
        mapTypeId: presenter.get('mapType')
      };
    },

    onZoomChange: function() {
      presenter.set('zoom', this.map.zoom, {silent: true});
      presenter.updateUrl();
    },

    resize: function() {
      google.maps.event.trigger(this.map, 'resize');
      this.map.setZoom(this.map.getZoom());
      this.map.setCenter(this.map.getCenter());
    },
  });

  var map = new Map();

  return map;

});