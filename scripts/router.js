App.Routers.Main = Backbone.Router.extend({

  routes: {
    '*path': 'home'
  },

  home: function() {
    app.views.map = new App.Views.Map();
    app.models.layersPresenter = new App.Models.LayersPresenter();
    app.mediator = new App.Mediator();
  }

});