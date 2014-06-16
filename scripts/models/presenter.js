App.Presenter = Backbone.Model.extend({

  initialize: function() {
    this.on('change', this.updateUrl, this);
  },

  setFromUrl: function(arr) {
    var baseLayer = app.collections.layers.getBaselayer(arr.baseLayer).slug;
    console.log(app.collections.layers.getBaselayer(arr.baseLayer).get('slug'));

    var attrs = {
      baseLayer: baseLayer   || 'loss',
      zoom:      arr.zoom    || 3,
      mapType:   arr.mapType || 'terrain'
    };

    this.set(attrs);
  },

  updateUrl: function() {
    app.routers.main.navigate(_.values(this.toJSON()).join('/'), {trigger: false});
  }

});