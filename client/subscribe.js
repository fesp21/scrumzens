Deps.autorun(function() {
	var allUsersSub = Meteor.subscribe('allUsers');
	
	if (allUsersSub.ready() && Session.get()) {
		$('.loading').hide();
		if (typeof map !== 'undefined') {
			map.addMarkers(Meteor.users.find().fetch());
			
		}
		else {
			$('.loading').show();
		}
	}
});

Deps.autorun(function() {
	var gh = Session.get('selectedGeohash');
	if (typeof map !== 'undefined') {
		if (gh)
		map.highlightGeohash(gh);
	}
});

Meteor.autorun(function() {
	
	Meteor.subscribe('charges');
	
})