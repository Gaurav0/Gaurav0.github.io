define([
	"ember_data",
	"app"
], function(DS, App) {

	App.FixtureAdapter = DS.FixtureAdapter.extend({
		queryFixtures: function(fixtures, query, type) {
            return Ember.A(fixtures.filter(function(item) {
                for(prop in query) {
                    if( item[prop] != query[prop]) {
                        return false;
                    }
                }
                return true;
            }));
		}
	})

	App.Store = DS.Store.extend({
		revision: 13,
		adapter: App.FixtureAdapter
	});
	
	return App.Store;
});