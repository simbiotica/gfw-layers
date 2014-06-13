// app classes
window.App = {
  Routers: {},
  Views: {},
  Models: {},
  Collections: {},
  Mediator: {},
  Presenter: {},
  initialize: function() {
    app.routers.main = new App.Routers.Main();
    Backbone.history.start(); // {pushState: true}
  }
};

// app instances
window.app = {
  routers: {},
  views: {},
  models: {},
  collections: {},
  mediator: {},
  presenter: {}
};

$(function () {
  App.initialize();
});

// Underscore Mixins
_.mixin({
  capitalize: function(string) {
    return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
  }
});