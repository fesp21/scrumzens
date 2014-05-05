Template.nav.events({
	'click .addInterest': function(evt, tmpl){
		evt.preventDefault();
		Session.set('adding_interest', true);
	}
})

Template.articles.rendered = function(){
	setTimeout(function(){
		masonize(function() {
			$('.search-query').focus();
		});
	}, 500);
}

Template.addform.events({
	'click .save': function(evt, tmpl){
		var title = tmpl.find('.title').value;
		var description = tmpl.find('.description').value;
		var file = tmpl.find('.file').value;
		var created = tmpl.find('.created').value;
		var height = getRandomInt(100, 350);
		Article.insert({title:title, description:description, src:file, created:created, height:height, width:'25%'})	
		Session.set('adding_interest', false);
		
	},
	'click .cancel': function(evt, tmpl){
		Session.set('adding_interest', false);
	},
	
	'click .close':function(evt, tmpl){
		Session.set('adding_interest', false);
	}
})

function getRandomInt(min, max){	
	return Math.floor(Math.random() * (max-min + 1)) + min;
}

function masonize(callback){
	var container = $('#articleContent');
	container.masonry({
		itemSelector: '.item',
		gutter: 20
	})
}