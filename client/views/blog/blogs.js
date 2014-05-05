Template.blogs.helpers({
	
	blogs: function() {
	var slug = Router.current().params.slug;
	var templateFunc = Template[slug];
	if(typeof templateFunc == 'function'){
		return templateFunc();
	} else {
		return "404";
	}
}

});