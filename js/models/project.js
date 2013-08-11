define([
	"ember_data",
	"app"
], function(DS, App) {

	App.Project = DS.Model.extend({
		slug: DS.attr('string'),
		title: DS.attr('string'),
		thumb: DS.attr('string'),
		image: DS.attr('string'),
		desc: DS.attr('string'),
		url: DS.attr('string'),
		urltext: DS.attr('string'),
		src: DS.attr('string')
	});
	
	App.Project.FIXTURES = [
		{
			id: 1,
			slug: "old-school-rpg-demo",
			title: "Old School RPG Demo",
			thumb: "images/rpg_thumb.jpg",
			image: "images/rpg.jpg",
			desc: "This is a demo of an old school console style JRPG, perhaps like Dragon Warrior or Final Fantasy for the original NES, written in HTML5.",
			url: "http://gaurav0.github.com/Old-School-RPG-Map",
			urltext: "Play Now",
			src: "https://github.com/Gaurav0/Old-School-RPG-Map"
		},
		{
			id: 2,
			slug: "space-em",
			title: "Space \u2019Em",
			thumb: "images/spaceem_thumb.png",
			image: "images/spaceem.png",
			desc: "A simple, fun HTML5 Space Shooter. Playable via keyboard, mouse or touch.",
			url: "http://gaurav0.github.com/ACM-Space-Shooter/spaceshooter.html",
			urltext: "Play Now",
			src: "https://github.com/Gaurav0/ACM-Space-Shooter"
		},
		{
			id: 3,
			slug: "infinite-graffiti-wall",
			title: "Infinite Graffiti Wall",
			thumb: "images/wall_thumb.jpg",
			image: "images/wall.jpg",
			desc: "A persistent, infinite graffiti wall on which people can collaboratively draw. Written using Python / HTML5 / Google App Engine.",
			url: "http://infinitegraffitiwall.appspot.com",
			urltext: "Try It Now",
			src: "https://bitbucket.org/Gaurav0/infinitegraffitiwall"
		}
	];
	
	return App.Project;
});