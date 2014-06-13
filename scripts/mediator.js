App.Mediator = function() {
  /* TODO
   * Be more specific:
   *   map:change
   *   layer:change
  */

  this.on('presenter:change', this.recreateLayers);
  this.on('presenter:change', this.mapChange);
};

App.Mediator.prototype = _.clone(Backbone.Events);

App.Mediator.prototype.recreateLayers = function() {
  var self = this;
  app.presenter.eachLayer(this.recreateLayer);
};

App.Mediator.prototype.recreateLayer = function(layer, layerName) {
  if (layer.active) {
    if (!app.views[layerName + 'Layer']) {
      app.views[layerName + 'Layer'] = new App.Views[_(layerName).capitalize() + 'Layer']();
    }
    if (!app.views[layerName + 'Layer'].rendered) {
      app.views[layerName + 'Layer'].render();
    } else {
      app.views[layerName + 'Layer'].updateTiles();
    }
  } else {
    if (app.views[layerName + 'Layer']) app.views[layerName + 'Layer'].removeLayer();
  }
};

App.Mediator.prototype.mapChange = function() {
  console.log('map change');
  app.views.map.updateMap();
}
