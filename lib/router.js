var Layouts;
Layouts = [
{	
	//Layout Definition
	layoutTemplate: 'layout',
	yieldTemplates: [
		'loading', 'middle', 'overview', 'footer'
		],
routes: ['managersList', 'managerInfo']
}
];

var requireLogin = function() {
	if (! Meteor.user()) {
		if (Meteor.logginIn())
			this.render(this.loadingTemplate);
		else
			this.render('accessDenied');
		this.stop();
	}
}

Router.onBeforeAction(requireLogin, {only: 'newProfile'});
Router.onBeforeAction(function() {clearErrors() });

Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	waitOn: function() { 
		return [Meteor.subscribe('managers'), Meteor.subscribe('profiles'), Meteor.subscribe('comments')];}
});


Router.map(function() {
	
	/// static
	this.route('home', {path: '/'});
	this.route('how', {path:'/how'});
	this.route('stories', {path:'/stories'});
	this.route('contact', {path:'/contact'});
	this.route('why', {path:'/why'});
	this.route('article', {path: '/article'});
	
	
	//Dynamic
	this.route('calendar', {path: '/calendar'});
	
	
	/// Managers
	this.route('managersList', {path: '/managers'});
	this.route('managerInfo', {
 		path: '/managers/:_id',
 		// get data context for manager by id
 		data: function() {return Managers.findOne(this.params_id);}
 	});
   

   this.route('managerSubmit', {
      path: '/submit'
   });
   
   //Consultant
   
   this.route('consultant',{
	   path: '/consultant'
   });
   // Profiles
   this.route('profiles', {
	   path: '/profiles'
   });
   
   this.route('profilePage', {
	   path: '/profiles/:_id',
	   data: function() { return Profiles.findOne(this.params._id);}
   });
   this.route('profile', {
	   path: '/profile/:_id',
	   template: 'profile',
	   data: function() {return Profiles.findOne(this.params._id);}
   });
   this.route('newProfile', {
	   path: '/join'
   });
   this.route('editProfile', {
	   path: '/profile/:_id/edit',
	   data: function() { return Profiles.findOne(this.params._id);}
   });
   
   this.route('deleteProfile', {
	   path: '/profile/:_id/delete',
	   data: function() { return Profiles.findOne(this.params._id);}
   });
   
   // Admin
   this.route('admin', {
	   path:'/admin',
	   template: 'accountsAdmin',
	   onBeforeAction: function() {
		   if (Meteor.logginIn()) {
			   this.render(this.loadingTemplate);
			   
		   } else if(!Roles.userIsInRole(Meteor.user(), ['admin'])) {
			   console.log('redirecting');
			   this.redirect('/');
		   }
	   }
	   });
	   
	   // Blog Routes
	   this.route('blogs', {
		   path: '/blogs/:slug',
		   template: 'blogs'
		
	   });
// 	
 });
