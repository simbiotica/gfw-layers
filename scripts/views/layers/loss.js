App.Views.LossLayer = App.Views.CanvasLayer.extend({

  initialize: function() {
    this.dataMaxZoom = 12;
    this.name = "loss";
    this.url = 'http://earthengine.google.org/static/hansen_2013/gfw_loss_year/%z/%x/%y.png';
    this.parent.initialize.apply(this);

    app.views.lossTimeline = this.timeline = new App.Views.LossTimeline();
  },

  filterCanvasImage: function(imgdata, w, h) {
    var components = 4,
        z = app.views.map.map.getZoom(),
        timelineDate = app.models.layersPresenter.getLayer('loss').timelineDate;

    for(var i = 0; i < w; ++i) {
      for(var j = 0; j < h; ++j) {
        var pixelPos = (j * w + i) * components,
            yearLoss = imgdata[pixelPos],
            yearStart = timelineDate[0],
            yearEnd = timelineDate[1];

        yearLoss = 2000 + yearLoss;

        if (imgdata[pixelPos + 1] > 10 && (yearLoss >= yearStart && yearLoss < yearEnd)) {
          imgdata[pixelPos] = 220;
          imgdata[pixelPos + 1] = 102;
          imgdata[pixelPos + 2] = 153;
          imgdata[pixelPos + 3] = (z < 13) ? (12/z) * 255 : 255;
        } else {
          imgdata[pixelPos + 3] = 0;
        }
      }
    }
  }

});