define([
	"ember",
	"ember_data"
], function(Ember, DS) {
	var App = Ember.Application.create();
	App.deferReadiness();
	
	return App;
});