Template.profile.helpers({
	ownProfile: function() {
		return this.userId == Meteor.userId();
		
	},
	profile: function() {
		var a = document.createElement('a');
		a.href = this.url;
		return Profiles.findOne({id:_id});
	},
	
	commentsCount: function() {
		return Comments.find({postId: this._id}).count();
	}
});