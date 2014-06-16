App.Mediator = function() {
  app.presenter.on('change:baseLayer', this.recreateLayers, this);
  app.presenter.on('change:zoom', this.mapChange, this);
  app.presenter.on('change:mapType', this.mapChange, this);
  app.presenter.on('change:timelineDate', this.updateTimelineDate, this);
};

// Render / remove layers
App.Mediator.prototype.recreateLayers = function() {
  var baseLayer = app.presenter.get('baseLayer');

  if (!app.views[baseLayer + 'Layer']) {
    app.views[baseLayer + 'Layer'] = new App.Views[_(baseLayer).capitalize() + 'Layer']();
    app.views[baseLayer + 'Layer'].render();
  }
};

App.Mediator.prototype.updateTimelineDate = function() {
  var baseLayer = app.presenter.get('baseLayer');

  app.views[baseLayer + 'Layer'].updateTiles();
};

App.Mediator.prototype.mapChange = function() {
  app.views.map.updateMap();
};