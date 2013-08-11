define([
	"ember",
	"app",
	"text!templates/project.html"
], function(Ember, App, projectTemplate) {
	App.ProjectView = Ember.View.extend({
		defaultTemplate: Ember.Handlebars.compile(projectTemplate)
	});
	
	return App.ProjectView;
});