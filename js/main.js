(function(root){
	require(["config"], function(config){
		requirejs.config(config);
		require([
			"app",
			"models/project",
			"models/store",
			"adapters/project",
			"controllers/project",
			"controllers/projects",
			"views/app",
			"views/index",
			"views/projects",
			"views/project",
			"views/resume",
			"router",
			"routes/projects",
			"routes/project"
		], function(App) {
			App.advanceReadiness();
		});
	});
})(this);
