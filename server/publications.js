Meteor.publish('managers', function() {
	return Managers.find();
});

Meteor.publish('comments', function() {
	return Comments.find();
});
Meteor.publish('blogs', function() {
	
	return Blog.find();
})
Meteor.publish('reviews', function() {
	return Reviews.find();
});
Meteor.publish('profiles', function() {
	return Profiles.find();
});
Meteor.publish('profile', function() {
	return Profiles.find({_id:id});
});
Meteor.publish('projects', function() {
	return Projects.find();
});
Meteor.publish('article', function() {
	return Article.find();
});
Meteor.publish('project', function() {
	return Projects.find({_id: id});
});
Meteor.publish('userProfile', function() {
	
	try{
		return Meteor.users.find({_id:this.userId}, {fields: {
			
			'_id': true,
			'username': true,
			'profile': true,
			'profile.name': true,
			'profile.avatar': true,
			'profile.username': true,
			'profile.selectedTheme': true,
			'profile.address': true,
			'profile.city': true,
			'profile.state': true,
			'profile.zip': true,
			'emails': true,
			'emails[0].address': true,
			'emails.address': true	
			
		}});
	}catch(error) {
		console.log(error);
	}
});

Meteor.publish('usersDirectory', function() {
	try{
		return Meteor.users.find({}, {fields: {
			'_id':true,
			'username': true,
			'profile': true,
			'profile.name': true,
			'profile.username': true,
			'emails': true,
			'emails[0].address': true,
			'emails.address': true,
		}});
	}catch(error) {
		console.log(error);
	}
});

Meteor.publish("allUsers", function(opts) {
	var opts = opts || {};
	var search = (opts.filterGeohash) ? {geohash:opts.filter} : {};
	var res = Meteor.users.find(search, {fields: {profile: 1, updatedAt:1}, sort: {updateAt: -1}});
	
	return res;
});
Meteor.publish('notifications', function() {
	return Notifications.find();
});