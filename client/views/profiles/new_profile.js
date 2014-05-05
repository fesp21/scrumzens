Template.newProfile.events({
	'submit form': function(e){
	e.preventDefault();
	
	var profile = {
		name: $(e.target).find('[name=name]').val(),
		price: $(e.target).find('[name=price]').val(),
		experience: $(e.target).find('[name=experience]').val(),
		address: $(e.target).find('[name=address]').val(),
		education: $(e.target).find('[name=education]').val(),
		background: $(e.target).find('[name=background]').val()
		
	}
	Meteor.call('profile', profile, function(error, id) {
		if (error){
			throwError(error.reason);
			
			if (error.error === 302)
			
			Router.go('profilePage', {_id: error.details})
		} else {
			Router.go('profilePage', {_id:id});
		}
		
	});
	}	
});