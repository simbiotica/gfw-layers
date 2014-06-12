App.Views.ImazonLayer = App.Views.CartodbLayer.extend({

  initialize: function() {
    this.dataMaxZoom = 12;
    this.name = "imazon";
    this.url = 'dyynnn89u7nkm.cloudfront.net';
    this.table = 'imazon_clean2';
    this.global_version = 6;
    
    var timelineDate = app.models.layersPresenter.getLayer('imazon').timelineDate;

    this.query = "SELECT * FROM " +
                 this.table +
                 " WHERE date between '" +
                 timelineDate[0].year() +
                 "-" +
                 timelineDate[0].month() +
                 "-1' AND '" +
                 timelineDate[1].year() +
                 "-" +
                 timelineDate[1].month() +
                 "-1'";

    this.parent.initialize.apply(this);

    // app.views.lossTimeline = this.timeline = new App.Views.LossTimeline();
  },

  setQuery = function() {

  }

});