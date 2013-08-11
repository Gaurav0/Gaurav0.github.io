define([
	"ember",
	"ember_data",
	"app"
], function(Ember, DS, App) {

	App.ProjectRoute = Ember.Route.extend({
		model: function(params) {
			var projs = App.Project.query({ slug: params.slug });
			return projs.one("didLoad", function() {
				projs.resolve(projs.get("firstObject"));
			});
		},
		
		serialize: function(model) {
			return { slug: model.get('slug') };
		}
	});
	
	return App.ProjectRoute;
});