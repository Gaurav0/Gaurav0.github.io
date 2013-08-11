define({
	shim : {
		'ember' : {
			deps: ['handlebars', 'jquery'],
			exports: 'Ember'
		},
		'ember_data': {
			deps: ['ember'],
			exports: 'DS'
		}
	},
	paths : {
		'templates': 'templates',
		'models': 'models',
		'views': 'views',
		'controllers': 'controllers',
		'routes': 'routes',
		/*libs*/
		'jquery': 'libs/jquery-1.9.1',
		'handlebars': 'libs/handlebars-1.0.0-rc.4',
		'ember': 'libs/ember-1.0.0-rc.6.1',
		'ember_data': 'libs/ember-data-0.13',
		/*requirejs-plugins*/
		'text': 'libs/requirejs-plugins/text',
		'hbs': 'libs/requirejs-plugins/hbs',
		'domReady': 'libs/requirejs-plugins/domReady'
	},
	/*hbs plugin options*/
	hbs: {
		disableI18n: true,
		templateExtension: "html"
	}
});
