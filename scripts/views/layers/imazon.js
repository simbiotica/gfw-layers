App.Views.ImazonLayer = App.Views.CartodbLayer.extend({

  initialize: function() {
    this.layerName = "imazon";
    this.url = 'dyynnn89u7nkm.cloudfront.net';
    this.table = 'imazon_clean2';
    this.global_version = 6;
    
    this.parent.initialize.apply(this);
    // app.views.lossTimeline = this.timeline = new App.Views.LossTimeline();
  }

});