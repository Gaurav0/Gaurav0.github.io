define([
	"ember",
	"ember_data",
	"app",
	"models/store"
], function(Ember, DS, App) {
	
	App.ProjectAdapter = App.FixtureAdapter.extend({});
	
	return App.ProjectAdapter;
});