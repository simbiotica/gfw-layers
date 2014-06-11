App.Models.LayersPresenter = Backbone.Model.extend({

  defaults: {
    forestChange: {
      loss: {
        active: false,
        timelineDate: [2001, 2013]
      }
    },
    forestCover: {
      forest: {
        active: false
      }
    }
  },

  initialize: function() {
    var self = this;
    this.on('change', function() {
      app.mediator.trigger('layersPresenter:change');
    });
  },

  setFromUrl: function(attrs) {
    var self = this;
    attrs = attrs || {};

    _.each(this.toJSON(), function(category, i) {
      var layer = self.get(i)[attrs.baseLayer];
      if (layer) {
        layer.active = true;
        self.spread();
      }
    });
  },

  toUrl: function() {
    var url = ''

    _.each(app.models.layersPresenter.toJSON(), function(category) {
      _.each(category, function(layer, layerName){
        if (layer.active) {
          url = '/' + layerName;
        }
      });
    });

    return url;
  },

  spread: function() {
    this.trigger('change'); 
  },

  getLayer: function(layerName) {
    if (layerName == 'loss') {
      return this.get('forestChange').loss;
    }
  }

});