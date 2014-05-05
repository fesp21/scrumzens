Template.profiles.helpers({
	profiles: function(){
		return Profiles.find({}, {sort: {submitted: -1}});
	}
});