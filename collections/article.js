Article = new Meteor.Collection('article');
Likes = new Meteor.Collection('likes');

Article.allow({
	insert: function(userId, doc){
		return !! userId;
	}
});