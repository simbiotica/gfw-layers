App.Views.LossLayer = App.Views.CanvasLayer.extend({

  initialize: function() {
    this.dataMaxZoom = 19;
    this.name = "loss";
    this.url = 'http://earthengine.google.org/static/hansen_2013/gfw_loss_year/%z/%x/%y.png';
    this.parent.initialize.apply(this);
  }

});