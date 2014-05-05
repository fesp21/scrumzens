Template.articles.helpers({
	articles: function(){
	return Articles.find();
	}
});

Template.event.adding_interest = function(){
	return Session.get('adding_interest');
}


Template.article.numlikes = function(){
	return Likes.find({article:this._id}).count();
}

Template.artilce.likethis = function() {
	var doeslike = Likes.findOne({user:Meteor.userId(), article:this._id});
	if(doeslike)
	return "You Like";
}