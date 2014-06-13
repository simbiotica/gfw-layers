App.Views.Map = Backbone.View.extend({
  
  initialize: function() {
    this.render();
  },

  render: function() {
    var options = this.getMapOptions;
    
    options.center = new google.maps.LatLng(40.412568, -3.711133);
    options.minZoom = 3;

    this.map = new google.maps.Map(document.getElementById('map'), options);

    google.maps.event.addListenerOnce(this.map, 'idle', function() {
    });
  },

  updateMap: function() {
    this.map.setOptions(this.getMapOptions());
  },

  getMapOptions: function() {
    return {
      zoom: app.presenter.get('map').zoom,
      mapTypeId: app.presenter.get('map').mapType
    };
  }

});