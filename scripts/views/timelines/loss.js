App.Views.LossTimeline = App.Views.Timeline.extend({

  opts: {
    dateRange: [2001, 2013],
    layerName: 'loss',
    xAxis: {
      months: {
        enabled: true,
        steps: true
      }
    }
  }

});