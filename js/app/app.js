define([
  'underscore',
  'mps',
  'Class'
], function (_, mps, Class) {

  var App = Class.extend({
    init: function() {
      console.log('App.initialize()');
      if (!Backbone.History.started) {
        console.log('Backbone.history.start');
        Backbone.history.start({pushState: true});
      }
    }
  });

  var app = new App();

  _.mixin({
    capitalize: function(string) {
      return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
    }
  });

  _.mixin({
    parseUrl: function() {
      var a = /\+/g;  // Regex for replacing addition symbol with a space
      var r = /([^&=]+)=?([^&]*)/g;
      var d = function (s) { return decodeURIComponent(s.replace(a, " ")); };
      var q = window.location.search.substring(1);
      var urlParams = {};
      
      // Parses URL parameters:
      while ((e = r.exec(q))) {
        urlParams[d(e[1])] = d(e[2]);
      }

      return urlParams;
    }
  });

  return app;
});