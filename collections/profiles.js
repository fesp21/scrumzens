Profiles = new Meteor.Collection('profiles');


Profiles.allow({
	
	update: ownsDocument,
	remove: ownsDocument
});

Profiles.deny({
	
	update: function(userId, profile, fieldNames){
		// can only edit the following fields
		return(_.without(fieldNames,  'price', 'education', 'experience', 'education', 'background' ).length > 0);
	}
});
Meteor.methods({
	profile: function(profileAttributes){
		var user = Meteor.user(),
		profileWithSameName = Profiles.findOne({name: profileAttributes.name});
		
		// ensure the user is logged in
		if(!user)
		throw new Meteor.Error(401, "You need to be logged in to create a profile");
	
	
	// ensure the user has a complete profile
	if (!profileAttributes.name && !profileAttributes.price && !profileAttributes.experience && !profileAttributes.address)
	throw new Meteor.Error(422, "Please fill in all the required fields");
	
	// check that there are no  profiles with the same information
	
	//pick out the whitelisted keys
	
	var profile = _.extend(_.pick(profileAttributes, 'name','price', 'address','experience', 'education', 'background' ),
	{
		name: profileAttributes.name + (this.isSimulation ? '(clinet)':'(server)'),
		userId: user._id,
		submitted: new Date().getTime()
	});
	
	// wait for 5 seconds
	if (!this.isSimulation) {
		var Future = Npm.require('fibers/future');
		var future = new Future();
		Meteor.setTimeout(function(){
			future.return();
		}, 5 * 1000);
		future.wait();
	}
	
	var profileId = Profiles.insert(profile);
	
	return profileId;
}
});