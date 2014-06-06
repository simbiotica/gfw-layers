App.Views.Map = Backbone.View.extend({
  
  initialize: function() {
    this.render();
  },

  render: function() {

    var mapOptions = {
      zoom: 3,
      center: new google.maps.LatLng(0, 0),
      mapTypeId: google.maps.MapTypeId.TERRAIN
    };

    this.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    google.maps.event.addListenerOnce(this.map, 'idle', function() {
    });
  },

});