define([
	"ember",
	"ember_data",
	"app"
], function(Ember, DS, App) {

	App.ProjectRoute = Ember.Route.extend({
		model: function(params) {
			return this.store.find('project', {slug: params.slug}).then(function(results) {
				return results.objectAt(0);
			});
		},
		
		serialize: function(model) {
			return { slug: model.get('slug') };
		},
		
		activate: function() {
			setTimeout(function() {
				$('[href="#/projects"]').addClass("active");
			}, 0);
		},
		
		deactivate: function() {
			$('[href="#/projects"]').removeClass("active");
		}
	});
	
	return App.ProjectRoute;
});