define([
	"ember",
	"app"
], function(Ember, App) {

	App.Router.map(function () {
		this.route('projects');
		this.resource('project', { path: '/project/:slug' });
		this.route('resume');
	});
	
	return App.Router;
});