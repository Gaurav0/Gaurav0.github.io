define([
	"ember",
	"app",
	"text!templates/projects.html"
], function(Ember, App, projectsTemplate) {
	App.ProjectsView = Ember.View.extend({
		defaultTemplate: Ember.Handlebars.compile(projectsTemplate)
	});
	
	return App.ProjectsView;
});