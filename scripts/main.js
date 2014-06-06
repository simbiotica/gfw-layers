window.App = {
  Routers: {},
  Views: {},
  Models: {},
  Collections: {},
  initialize: function() {
    app.routers.main = new App.Routers.Main();
    Backbone.history.start({pushState: true, root: '/'});
  }
};

window.app = {
  routers: {},
  views: {},
  models: {},
  collections: {}
}

$(function () {
  App.initialize();
});