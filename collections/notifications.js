Notifications = new Meteor.Collection('notifications');

Notifications.allow({
	
	update: ownsDocument
});

createNotification = function(notification) {
	var notification = Notifications.findOne({}, {sort: {submitted: -1}});
	if (notification.userId !== notification.userId){
		Notifications.insert({
			userId: profileId,
			read: false,
			submitted: new Date()
			
		});
	}
};