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
      zoom: app.presenter.get('map').zoom,
      mapTypeId: app.presenter.get('map').mapType
    };
  },

  onZoomChange: function() {
    app.presenter.get('map').zoom = this.map.zoom;
    app.presenter.updateUrl();
  }

});