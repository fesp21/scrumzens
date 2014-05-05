Template.profilePage.helpers({
	profilePage: function(){
		return Profiles.findOne({id:this._id});
	}
	//comments: function() {
	//	return Comments.findOne({profileId: this._id});
	//}
});