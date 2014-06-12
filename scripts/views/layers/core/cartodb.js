App.Views.CartodbLayer = cdb.core.View.extend({

  initialize: function() {
    this.map = app.views.map.map;
    this.layer = {};
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
      query: this.query,
      layer_order: 1,
      opacity: 1,
      interactivity: "cartodb_id",
      debug: false,
      auto_bound: false
    });

    this.rendered = true;
  },

  // removeLayer: function() {
  // },

  // filterTiles: function() {
  // }

});