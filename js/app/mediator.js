define([
  'underscore',
  'backbone',
  'mps',
  'Class',
  'presenter',
  'collections/layers',
  'views/map'
], function (_, Backbone, mps, Class, layers, map) {

  var Mediator = Class.extend({
    init: function() {
      
      // Listen to presenter events
      presenter.on('change:baseLayer', this.checkBaselayers, this);
      presenter.on('change:timelineDate', this.updateBaselayerTiles, this);
      presenter.on('change:zoom', this.mapChange, this);
      presenter.on('change:mapType', this.mapChange, this);

      this.collections = {};
      this.views = {};
    },

    checkBaselayers: function() {
      var baseLayer = presenter.get('baseLayer');

      layers.fetch();

      layers.bind('reset', _.bind(function() {

        // Remove baselayers
        _.each(layers.getBaselayers(), function(layer) {
          if (this.views[layer.slug + 'Layer']) {
            this.views[layer.slug + 'Layer'].removeLayer();
          }
        });
      
        if (!thisviews[baseLayer + 'Layer']) {
          // TODO
          console.log('TODO: Create new layer...');
          //this.views[baseLayer + 'Layer'] = new App.Views[_(baseLayer).capitalize() + 'Layer']();
        }

        // Render current Baselayer
        this.views[baseLayer + 'Layer'].render();

      }, this));
    },

    updateBaselayerTiles: function() {
      var baseLayer = presenter.get('baseLayer');
      this.views[baseLayer + 'Layer'].updateTiles();
    },

    mapChange: function() {
      map.updateMap();
    }
  });
});
