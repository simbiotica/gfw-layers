App.Models.LayersPresenter = Backbone.Model.extend({

  defaults: {
    forestChange: {
      loss: false
    },
    forestCover: {
      forest: false
    }
  },

  initialize: function() {
    var self = this;
    this.on('change', function() {
      app.mediator.trigger('layersPresenter:change');
    });
  },

  setAttr: function(attr, nested, value) {
    var updatedAttr = _.clone(this.get(attr));
    updatedAttr[nested] = value;
    this.set(attr, updatedAttr);
  },

  setFromUrl: function(attrs) {
    /* recieves:
    {
      baseLayer: 'forma',
      secondaryLayers: '500,100,300,500',
      coords: '12.232, 32.342'
    }
    
    Should return the object as it is
    */
  },

  toUrl: function() {
    var url = ''

    _.each(app.models.layersPresenter.toJSON(), function(layer) {
      _.each(layer, function(l, i) {
        if (l) {
          url = '/' + i;
        }
      })
    });

    return url;
  },

});