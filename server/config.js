// first, remove configuratoin entry in case service is already available

// ServiceConfiguration.configurations.remove({
// 	service: "github"
// });
// 
// ServiceConfiguration.configurations.insert({
// 	service: "github",
// 	clientId: Meteor.settings.github_client,
// 	secret: Meteor.settings.github_secret
// });
// 
// console.log('=> Loading app settings');
// 
// if (Meteor.settings.github_client === undefined){
// 	console.log('!!! you need to set an load a settings.json file !!!');
// }