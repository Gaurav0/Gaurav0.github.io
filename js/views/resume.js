define([
	"ember",
	"app",
	"text!templates/resume.html"
], function(Ember, App, resumeTemplate) {
	App.ResumeView = Ember.View.extend({
		defaultTemplate: Ember.Handlebars.compile(resumeTemplate)
	});
	
	return App.ResumeView;
});