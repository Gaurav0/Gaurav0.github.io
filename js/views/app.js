define([
	"ember",
	"app",
	"text!templates/app.html"
], function(Ember, App, appTemplate) {
	App.ApplicationView = Ember.View.extend({
		defaultTemplate: Ember.Handlebars.compile(appTemplate)
	});
	
	return App.ApplicationView;
});