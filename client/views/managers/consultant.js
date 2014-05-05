Template.consultant.events({
	'submit form': function(e) {
		e.preventDefault();
		var manager = {
			name: $(e.target).find('[name=name]').val(),
			email: $(e.target).find('[name=email]').val(),
			phone: $(e.target).find('[name=phone]').val(),
			inquiry: $(e.target).find('[name=inquiry]').val()
		}
		
		Meteor.call('manager', manager, function(error, id) {
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