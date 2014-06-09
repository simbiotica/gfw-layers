App.Routers.Main = Backbone.Router.extend({

  routes: {
    '/:layerName': 'home',
    '*path':       'home'
  },

  home: function(layerName) {
    console.log('router');
    app.views.map = new App.Views.Map();
    app.mediator = new App.Mediator();
    app.models.layersPresenter = new App.Models.LayersPresenter();

    _.each(app.models.layersPresenter.toJSON(), function(layer, i) {
      if(typeof(app.models.layersPresenter.get(i)[layerName]) == 'boolean') {
        app.models.layersPresenter.setAttr(i, layerName, true);
      }
    });
  }

});