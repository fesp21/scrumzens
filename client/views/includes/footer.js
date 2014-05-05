Template.footer.helpers({
	footerCode: function() {
		return getSetting('footerCode');
			},
			footerClass: function() {
			
				return Session.get('isManagers') ? 'absolute': 'static';
			}
});