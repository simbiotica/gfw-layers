window.App = {
  Routers: {},
  Views: {},
  Models: {},
  Collections: {},
  Mediator: {},
  initialize: function() {
    app.routers.main = new App.Routers.Main();
    Backbone.history.start(); // {pushState: true}
  }
};

window.app = {
  routers: {},
  views: {},
  models: {},
  collections: {},
  mediator: {}
}

$(function () {
  App.initialize();
});

// Underscore Mixins
_.mixin({
  capitalize: function(string) {
    return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
  }
})