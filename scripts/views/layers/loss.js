App.Views.LossLayer = App.Views.CanvasLayer.extend({

  initialize: function() {
    this.dataMaxZoom = 12;
    this.name = "loss";
    this.url = 'http://earthengine.google.org/static/hansen_2013/gfw_loss_year/%z/%x/%y.png';
    this.parent.initialize.apply(this);

    app.views.lossTimeline = this.timeline = new App.Views.LossTimeline();
  },

  filterCanvasImage: function(imageData, w, h) {
    var components = 4,
        zoom = app.views.map.map.getZoom(),
        timelineDate = app.models.layersPresenter.getLayer('loss').timelineDate;

    for(var i = 0; i < w; ++i) {
      for(var j = 0; j < h; ++j) {
        var pixelPos = (j * w + i) * components,
            yearLoss = imageData[pixelPos],
            intensity = imageData[pixelPos + 1],
            yearStart = timelineDate[0],
            yearEnd = timelineDate[1];

        yearLoss = 2000 + yearLoss;

        if (yearLoss >= yearStart && yearLoss < yearEnd) {
          imageData[pixelPos] = 220;
          imageData[pixelPos + 1] = 102;
          imageData[pixelPos + 2] = 153;
          if (zoom < 13) {
            imageData[pixelPos + 3] = intensity < 10 ? 0: (12/zoom) * 255;
          } else {
            imageData[pixelPos + 3] = intensity < 10 ? 0: 255;
          }
        } else {
          imageData[pixelPos + 3] = 0;
        }
      }
    }
  }

});