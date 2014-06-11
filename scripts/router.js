App.Routers.Main = Backbone.Router.extend({

  routes: {
    '/:baseLayer': 'home',
    '*path':       'home'
  },

  home: function(baseLayer) {
    app.views.map = new App.Views.Map();
    app.mediator = new App.Mediator();
    app.models.layersPresenter = new App.Models.LayersPresenter();

    app.models.layersPresenter.setFromUrl({
      baseLayer: baseLayer
    });
  }

});