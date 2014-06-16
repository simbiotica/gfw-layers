App.Routers.Main = Backbone.Router.extend({

  routes: {
    '/:baseLayer/:zoom/:mapType/:sublayers/': 'home',
    '/:baseLayer/:zoom/:mapType/:sublayers': 'home',
    '*path': 'home'
  },

  home: function(baseLayer, zoom, mapType, sublayers) {
    app.collections.layers = new App.Collections.Layers();
    app.collections.layers.fetch();

    app.collections.layers.bind('reset', function() {

      app.presenter.setFromUrl({
        baseLayer: baseLayer,
        zoom: Number(zoom),
        mapType: mapType,
        sublayers: sublayers
      });
      
    });

  }

});