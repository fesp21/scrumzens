Accounts.onCreateUser(function(options, user) {
	if(user.services.github) {
		var accessToken = user.services.github.accessToken,
		result,
		profile;
		
		
		result = Meteor.http.get('https://api.githib.com/user', {
			headers: {"User-Agent": "Meteor/1.0"},
			
			params: {
				access_token: accessToken
			}
		});
		
		repo = Meteor.http.get ("https://api.github.com/user/repos", {
			headers: {"User-Agent": "Meteor/1.0"},
				
			params: {
				access_token: accessToken
			}
		});
		
		if (result.error)
			throw result.error;
			profile = _.pick(result.data, 
				"name",
				"login",
				"avatar_url",
				"company",
				"bio",
				"location",
				"email",
				"bio"
			);
			
			user.profile = result.data;
			user.everything = repo;
	}
	
	// if(users.services.linkedIn) {
// 		var accessToken = users.services.linkedIn.accessToken,
// 		result,
// 		profile;
// 		
// 		result = Meteor.http.get("https://api.linkedIn.com/user", {
// 			headers: {"User-Agent": "Meteor/1.0"},
// 			params: { access_token: accessToken}
// 		});
		
		
	//}
	return user;
	
});