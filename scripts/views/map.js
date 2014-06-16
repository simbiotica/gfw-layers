App.Views.Map = Backbone.View.extend({
  
  initialize: function() {
    _.bindAll(this, 'onZoomChange');
    this.render();
  },

  render: function() {
    var options = this.getMapOptions;
        self = this;
    
    options.center = new google.maps.LatLng(40.412568, -3.711133);
    options.minZoom = 3;

    this.map = new google.maps.Map(document.getElementById('map'), options);

    google.maps.event.addListener(this.map, 'zoom_changed', this.onZoomChange);
  },

  updateMap: function() {
    this.map.setOptions(this.getMapOptions());
  },

  getMapOptions: function() {
    return {
      zoom: app.presenter.get('zoom'),
      mapTypeId: app.presenter.get('mapType')
    };
  },

  onZoomChange: function() {
    app.presenter.set('zoom', this.map.zoom, {silent: true});
    app.presenter.updateUrl();
  }

});