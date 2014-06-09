App.Mediator = function() {
  this.on('layersPresenter:change', this.recreateLayers);
};

App.Mediator.prototype = _.clone(Backbone.Events);

App.Mediator.prototype.recreateLayers = function() {
  var self = this;
  _.each(app.models.layersPresenter.toJSON(), function(category) {
    _.each(category, function(isActive, layerName) {
      self.initLayer(isActive, layerName);
    });
  });

};

App.Mediator.prototype.initLayer = function(isActive, layerName) {
  if (isActive) {
    if (!app.views[layerName + 'Layer']) {
      app.views[layerName + 'Layer'] = new app.models.layersPresenter.layersInfo[layerName].view();
    }
    if (!app.views[layerName + 'Layer'].rendered) app.views[layerName + 'Layer'].render();
  } else {
    if (app.views[layerName + 'Layer']) app.views[layerName + 'Layer'].removeLayer();
  }
};