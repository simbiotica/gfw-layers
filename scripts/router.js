App.Routers.Main = Backbone.Router.extend({

  routes: {
    ':baseLayer/:zoom/:mapType/': 'home',
    ':baseLayer/:zoom/:mapType': 'home',
    '*path': 'home'
  },

  home: function() {
    app.presenter.setFromUrl(arguments);
  }

});