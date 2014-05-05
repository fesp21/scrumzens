Template.editProfile.events({
	'submit form': function(e) {
		e.preventDefault();
		
		var currentProfileId = this._id;
		
		var profileProperties = {
			name: $(e.target).find('[name=name]').val(),
			price: $(e.target).find('[name=price]').val(),
			address: $(e.target).find('[name=address]').val(),
			experience: $(e.target).find('[name=experience]').val(),
			education: $(e.target).find('[name=education]').val(),
			background: $(e.target).find('[name=backgroun]').val()
			
		}
		
		Profiles.update(currentProfileId, {$set:profileProperties}, function(error){
			if (error){
			
			}
			
			else {
				Router.go('profilePage', {_id:currentProfileId});
			}
		});
	},
	
	'click .delete': function(e) {
		var currentProfileId = this._id;
		Profiles.remove(currentProfileId);
		Router.go('profiles');
	}
})