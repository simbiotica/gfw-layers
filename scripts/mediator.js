App.Mediator = function() {
  this.on('layersPresenter:change', this.recreateLayers);
  this.on('layersPresenter:change', this.updateUrl);
};

App.Mediator.prototype = _.clone(Backbone.Events);

App.Mediator.prototype.recreateLayers = function() {
  var self = this;

  _.each(app.models.layersPresenter.toJSON(), function(category) {
    _.each(category, function(layer, layerName){
      self.recreateLayer(layer, layerName)
    });
  });
};

App.Mediator.prototype.recreateLayer = function(layer, layerName) {
  if (layer.active) {
    if (!app.views[layerName + 'Layer']) {
      app.views[layerName + 'Layer'] = new App.Views[_(layerName).capitalize() + 'Layer']();
    }
    if (!app.views[layerName + 'Layer'].rendered) {
      app.views[layerName + 'Layer'].render();
    } else {
      app.views[layerName + 'Layer'].filterTiles();
    }
  } else {
    if (app.views[layerName + 'Layer']) app.views[layerName + 'Layer'].removeLayer();
  }
};

App.Mediator.prototype.updateUrl = function() {
  app.routers.main.navigate(app.models.layersPresenter.toUrl(), {trigger: false});
};