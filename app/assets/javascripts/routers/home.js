SSJ.Routers.Home = Backbone.Router.extend({
	initialize: function () {
		var navView = new SSJ.Views.Menu();
		navView.render();

		var contentView = new SSJ.Views.Content();
		contentView.render();
	}
});