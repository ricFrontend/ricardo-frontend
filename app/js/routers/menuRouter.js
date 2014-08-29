Curriculum.Router = Backbone.Router.extend ({ 
	routes: {  
		'': 'home',
		'view/:name': 'viewSection'
	},
	initialize: function () {
	    this.current = {};
	    this.jsonData = {};
	    this.menus = new Curriculum.Collections.Directory();
	    this.botonesView = new Curriculum.Views.DirectoryView();
	    Backbone.history.start();
	},
	home: function() {
		this.navigate('view/Perfil', {trigger:true});
	},
	viewSection: function(name) {
		if (name === 'Perfil') {
			$('html, body').animate({
	            scrollTop: $('.aboutHeader').offset().top
	        }, 1000);

		} else if(name === 'Habilidades') {
			$('html, body').animate({
	            scrollTop: $('.skillsHeader').offset().top
	        }, 1000);

		} else if(name === 'Portafolio') {
			$('html, body').animate({
	            scrollTop: $('.gallery').offset().top
	        }, 1000);
		} else {
			$('html, body').animate({
	            scrollTop: $('.headerContacto').offset().top
	        }, 1000);
		};
		
	}
});
