Comments = new Meteor.Collection('comments');

Comments.allow({
	insert: function(userId, doc) {
		return !! userId;
	}
	
});

Meteor.methods({
	comment: function() {
		
		var user = Meteor.user();
		var profile = Profiles.findOne(commentAttributes.profileId);
		
		if (!user)
		throw new Meteor.Error(401, "You need to login to make comments");
		
		if (!commentAttributes.body)
		throw new Meteor.Error(422, "Please write some content");
		
		comment = _.extend(_.pick(commentAttributes, 'profileId', 'body'), {
			userId: user._id,
			name: user.username,
			submitted: new Date().getTime()
		});
		return Comments.insert(comment);
	}
});