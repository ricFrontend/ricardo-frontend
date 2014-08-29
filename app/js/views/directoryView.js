var sections = [
	{name: "Perfil", font: "icon-icons", classMenu: "", ancla: "#aboutHeader"},
	{name: "Habilidades", font: "icon-icons23", classMenu: "", ancla: "#skillsHeader"},
	{name: "Portafolio", font: "icon-icons2", classMenu: "", ancla: "#gallery"},
	{name: "Contacto", font: "icon-icons4", classMenu: "mail", ancla: "#contacto"}
	];

Curriculum.Views.DirectoryView = Backbone.View.extend({
	el: $('#menu'),
	initialize: function() {
		this.list = new Curriculum.Collections.Directory(sections);
		this.render();
	},
	render: function() {
		_.each(this.list.models, function(papaya) {
			var sectionView = new Curriculum.Views.SectionView({model:papaya});
			this.$el.append(sectionView.render().el);
		}, this);
	}
});