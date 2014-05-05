Requests = new Meteor.Collection('requests');

Requests.allow({
	
	update: ownsDocument
});

createRequests = function(requests) {
	
	var request = Request.findOne({}, {sort: {submitted: -1}});
	if (request.userId !== profile.userId) {
		
		Request.insert({
			userId: profile.userId,
			profileId: profile._id,
			title: title,
			description: description,
			submitted: new Date(),
			active: true
			
		});
	}
};