App.Routers.Main = Backbone.Router.extend({

  routes: {
    ':baseLayer/:zoom/:mapType/': 'home',
    ':baseLayer/:zoom/:mapType': 'home'
  },

  home: function(baseLayer, zoom, mapType) {
    app.presenter = new App.Presenter();
    app.mediator = new App.Mediator();
    app.views.map = new App.Views.Map();

    app.presenter.setFromUrl({
      baseLayer: baseLayer,
      zoom: zoom,
      mapType: mapType
    });
  }

});