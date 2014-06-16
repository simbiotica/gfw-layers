define([
  'backbone',
  'mps'
], function (Backbone, mps) {

  var Presenter = Backbone.Model.extend({

    defaults: {
      baseLayer: '',
      zoom: 0,
      mapType: ''
    },

    initialize: function() {
      this.on('change', this.updateUrl, this);
    },

    setFromUrl: function(attrs) {
      var result = {
        baseLayer: attrs[0] || 'loss',
        zoom: Number(attrs[1]) || 3,
        mapType: attrs[2] || 'terrain'
      };

      this.set(result);
    },

    // TODO: Only router should call navigate via mps events.
    updateUrl: function() {
      //router.navigate(_.values(this.toJSON()).join('/'), {trigger: false});
      console.log('TODO: this should happen in router only')
    }

  });

  var presenter = new Presenter();

  return presenter;

});