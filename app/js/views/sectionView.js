Curriculum.Views.SectionView = Backbone.View.extend({
	events:{
		'click': 'toggleSection'
	},
	template: $('#navTemplate').html(),
	render: function() {
		var tmpl = _.template(this.template)
		this.$el.html(tmpl(this.model.toJSON()));
		return this;
	},
	toggleSection: function() {
		
		Curriculum.app.navigate('view/' + this.model.get('name'), {trigger:true});
	}
});