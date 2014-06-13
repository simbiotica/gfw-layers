App.Presenter = Backbone.Model.extend({

  defaults: {
    layers: {
      forestChange: {
        loss: {
          active: false,
          timelineDate: [2001, 2013]
        },
        imazon: {
          active: false,
          timelineDate: [moment([2007, 1, 1]), moment([2011, 8, 1])]
        }
      },
      forestCover: {
        forest: {
          active: false
        }
      }
    },
    map: {
      zoom: 3,
      mapType: 'terrain'
    }
  },

  initialize: function() {
    this.on('change', function() {
      app.mediator.trigger('presenter:change');
    });
  },

  setFromUrl: function(attrs) {
    attrs = attrs || {};

    // Set baselayer
    $.each(this.get('layers'), function(k, category) {
      if (category[attrs.baseLayer]) {
        category[attrs.baseLayer].active = true;
        return false;
      }
    });

    // Set zoom
    this.get('map').zoom = Number(attrs.zoom) || this.defaults.map.zoom;

    // Set map type
    this.get('map').mapType = attrs.mapType || this.defaults.map.mapType;

    this.spread();
  },

  toUrl: function() {
    var url = '/%baseLayer/%zoom/%mapType/',
        baseLayer, zoom, mapType;

    // Get baselayer
    this.eachLayer(function(layer, layerName) {
      if (layer.active) baseLayer = layerName;
    });

    // Get map options
    zoom = this.get('map').zoom;
    mapType = this.get('map').mapType;

    url = url.replace('%baseLayer', baseLayer).replace('%zoom', zoom).replace('%mapType', mapType);

    return url;
  },

  spread: function() {
    this.trigger('change'); 
    this.updateUrl();
  },

  getLayer: function(layerName) {
    var result = {};

    $.each(this.get('layers'), function(k, category) {
      var layer = _.pick(category, layerName);
      if (!_.isEmpty(layer)) {
        result = layer[layerName];
        return false;
      }
    });

    return result;
  },

  eachLayer: function(callback, arguments) {
    _.each(this.get('layers'), function(category) {
      _.each(category, function(layer, layerName){
        callback.apply(layer, [layer, layerName].concat(arguments));
      });
    });
  },

  updateUrl: function() {
    app.routers.main.navigate(this.toUrl(), {trigger: false});
  }

});