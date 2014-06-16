define([
  'app',
  'underscore',
  'backbone'
], function(app, _, Backbone) {

    describe("The app module", function() {

      it("is not null", function() {
        expect(app).not.toBe(null);
      });

      it("has created router and started Backbone.history support", function() {
        app.init();
        expect(app.router).not.toBe(null);
        expect(Backbone.History.started).toBe(true);
      });

      it("has defined capitalize() and parseUrl() mixins", function() {
        expect(_.capitalize).not.toBe(null);
        expect(_.parseUrl).not.toBe(null);
      });
    });
});