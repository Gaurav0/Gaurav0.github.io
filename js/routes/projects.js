define([
	"ember",
	"ember_data",
	"app"
], function(Ember, DS, App) {

	App.ProjectsRoute = Ember.Route.extend({
		model: function() {
			return App.Project.find();
		}
	});
	
	return App.ProjectsRoute;
});