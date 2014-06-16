App.Mediator = function() {
  app.presenter.on('change:baseLayer', this.checkBaselayers, this);
  app.presenter.on('change:timelineDate', this.updateBaselayerTiles, this);
  app.presenter.on('change:zoom', this.mapChange, this);
  app.presenter.on('change:mapType', this.mapChange, this);
};

App.Mediator.prototype.checkBaselayers = function() {
  var self = this, 
      baseLayer = app.presenter.get('baseLayer');

  app.collections.layers = new App.Collections.Layers();
  app.collections.layers.fetch();

  app.collections.layers.bind('reset', function() {

    // Remove baselayers
    _.each(this.getBaselayers(), function(layer) {
      if (app.views[layer.slug + 'Layer']) {
        app.views[layer.slug + 'Layer'].removeLayer();
      }
    });
  
    if (!app.views[baseLayer + 'Layer']) {
      app.views[baseLayer + 'Layer'] = new App.Views[_(baseLayer).capitalize() + 'Layer']();
    }

    // Render current Baselayer
    app.views[baseLayer + 'Layer'].render();

  });

};

App.Mediator.prototype.updateBaselayerTiles = function() {
  var baseLayer = app.presenter.get('baseLayer');
  app.views[baseLayer + 'Layer'].updateTiles();
};

App.Mediator.prototype.mapChange = function() {
  app.views.map.updateMap();
};