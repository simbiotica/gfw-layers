App.Views.CartodbLayer = cdb.core.View.extend({

  initialize: function() {
    this.map = app.views.map.map;
    this.layer = {};
    this.layerOrder = this.layerOrder || 1;
    this.rendered = false;
  },

  render: function() {
    if (this.rendered) return;

    this.layer = new CartoDBLayer({
      map: this.map,
      user_name: '',
      tiler_domain: this.url,
      sql_domain: this.url,
      extra_params: { v: this.global_version},
      tiler_path: '/tiles/',
      tiler_suffix: '.png',
      tiler_grid: '.grid.json',
      table_name: this.table,
      query: this.getQuery(),
      layer_order: this.layerOrder,
      opacity: 1,
      interactivity: "cartodb_id",
      debug: false,
      auto_bound: false
    });

    this.rendered = true;
  },

  updateTiles: function() {
    this.layer.setQuery(this.getQuery());
  },

  getQuery: function() {
    var timelineDate = app.presenter.getLayer(this.layerName).timelineDate;

    return "SELECT * FROM " +
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
   }

  // removeLayer: function() {
  // },

});