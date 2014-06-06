App.Models.LayersPresenter = Backbone.Model.extend({

  defaults: {
    forestChange: {
      loss: false
    },
    forestCover: {
      forest: false,
      carbonStocks: false
    }
  },

  layersInfo: {
    forest: {
      view: App.Views.ForestLayer
    },
    loss: {
      view: App.Views.LossLayer
    }
  },
  
  initialize: function(argument) {
    this.on('change', this.recreateLayers);
  },

  recreateLayers: function() {
    var self = this;

    _.each(this.toJSON(), function(category) {
      _.each(category, function(isActive, layerName) {
        self.initLayer(isActive, layerName);
      });
    });
  },

  initLayer: function(isActive, layerName) {
    if (isActive) {
      if (!app.views[layerName + 'Layer']) {
        app.views[layerName + 'Layer'] = new this.layersInfo[layerName].view();
        app.views[layerName + 'Layer'].render();
      } else {
        app.views[layerName + 'Layer'].render();
      }
    } else {
      if (app.views[layerName + 'Layer']) {
        app.views[layerName + 'Layer'].remove();
      }
    }
  },

  setAttr: function(attr, nested, value) {
    var updatedAttr = _.clone(this.get(attr));
    updatedAttr[nested] = value;
    this.set(attr, updatedAttr);
  }

});