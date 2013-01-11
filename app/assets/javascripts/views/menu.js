SSJ.Views.Menu = Backbone.View.extend({
	template: JST["home/menu"],
	el: "#menu",


  initialize: function() {

  },

  render: function() {
		var menu = [
			{title: "Client"},
			{title: "Side"},
			{title: "Rendered"}
		];
    this.$el.html(this.template({items: menu}));
    return this;
  }
});