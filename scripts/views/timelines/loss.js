App.Views.LossTimeline = App.Views.Timeline.extend({

  initialize: function() {
    this.dateRange = [2001, 2013];
    this.layerName = 'loss';

    this.parent.initialize.apply(this);
  }

});