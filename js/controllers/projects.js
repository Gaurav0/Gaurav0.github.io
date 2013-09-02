define([
	"ember",
	"app"
], function(Ember, App) {

	App.ProjectsController = Ember.ArrayController.extend({
		content: [],
		sortProperties: ['id'],
		sortAscending: true
	});
	
	return App.ProjectsController;
});