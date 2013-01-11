SSJ.Views.Content = Backbone.View.extend({
	template: JST["home/content"],
	el: "#content",

  initialize: function() {

  },

  render: function() {
		var body = "This comes from the client. ..... You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don't know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out. Now we took an oath, that I'm breaking now. We said we'd say it was the snow that killed the other two, but it wasn't. Nature is lethal but it doesn't hold a candle to man.";
    this.$el.html(this.template({body: body}));
    return this;
  }
});