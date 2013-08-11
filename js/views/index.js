define([
	"ember",
	"app",
	"text!templates/index.html"
], function(Ember, App, indexTemplate) {
	App.IndexView = Ember.View.extend({
		defaultTemplate: Ember.Handlebars.compile(indexTemplate)
	});
	
	return App.IndexView;
});