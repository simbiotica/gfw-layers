App.Models.LayersPresenter = Backbone.Model.extend({

  defaults: {
    forestChange: {
      loss: false
    },
    forestCover: {
      forest: false
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

  initialize: function() {
    this.on('change', function() {
      app.mediator.trigger('layersPresenter:change');
    });
  },

  setAttr: function(attr, nested, value) {
    var updatedAttr = _.clone(this.get(attr));
    updatedAttr[nested] = value;
    this.set(attr, updatedAttr);
  }

});