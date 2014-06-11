App.Views.LossTimeline = App.Views.Timeline.extend({

  initialize: function() {
    this.dateRange = [2001, 2013];

    this.conf = {
      displayYears: true,
      displayMonths: false
    }

    this.parent.initialize.apply(this);
  },

  onBrush: function() {
    console.log('brushhh');
    var self = app.views.lossTimeline,
        value = self.brush.extent()[0],
        timelineDate = app.models.layersPresenter.getLayer('loss').timelineDate;

    // if (Math.round(value) !== timelineDate[1]) {
    //   self.updateTimelineDate([2002, Math.round(value)])
    // }

    if (d3.event.sourceEvent) { // not a programmatic event
      value = self.xscale.invert(d3.mouse(this)[0]);
      self.brush.extent([value, value]);
    }

    var hl = self.handlers.left.attr("cx"),
        hr = self.handlers.right.attr("cx");


    if (Math.abs(self.xscale(value) - hr) < Math.abs(self.xscale(value) - hl)) {
      if (Math.round(value) !== timelineDate[1]) {
        self.handlers.right.attr("cx", self.xscale(Math.round(value)));
        self.updateTimelineDate([timelineDate[0], Math.round(value)])
      }
    } else {
      if (Math.round(value) !== timelineDate[0]) {
        self.handlers.left.attr("cx", self.xscale(Math.round(value)));
        self.updateTimelineDate([Math.round(value), timelineDate[1]])
      }
    }
  },

  updateTimelineDate: function(timelineDate) {
    app.models.layersPresenter.getLayer('loss').timelineDate = timelineDate;
    app.models.layersPresenter.spread();
  }

});