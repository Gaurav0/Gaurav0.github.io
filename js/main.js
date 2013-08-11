(function(root){
	require(["config"], function(config){
		requirejs.config(config);
		require([
			"app",
			"models/store",
			"models/project",
			"views/app",
			"views/index",
			"views/projects",
			"views/project",
			"views/resume",
			"controllers/project",
			"router",
			"routes/projects",
			"routes/project"
		], function(){});
	});
})(this);
