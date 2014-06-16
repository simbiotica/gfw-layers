App.Presenter = Backbone.Model.extend({

  defaults: {
    baseLayer: '',
    zoom: 0,
    mapType: ''
  },

  initialize: function() {
    this.on('change', this.updateUrl, this);
  },

  setFromUrl: function(attrs) {
    var result = {
      baseLayer: attrs[0] || 'loss',
      zoom: Number(attrs[1]) || 3,
      mapType: attrs[2] || 'terrain'
    };

    this.set(result);
  },

  updateUrl: function() {
    app.routers.main.navigate(_.values(this.toJSON()).join('/'), {trigger: false});
  }

});