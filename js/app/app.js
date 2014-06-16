define([
  'jquery',
  'underscore',
  'router',
  'mediator',
  'mps'
], function ($, _, Router, Mediator, mps) {

  var App = function () {
  }

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

  return {
   init: function () {
      console.log('App.initialize()');
      var app = new App;
      app.router = new Router(app);
      // app.mediator = new Mediator();
      if (!Backbone.History.started) {
        console.log('Backbone.history.start');
        Backbone.history.start({pushState: true});
      }
    },  
  };
});