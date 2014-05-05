calendar = new Meteor.Collection('calendar');
Session.setDefault('editing_calendar');
Session.setDetault('showEditEvent', false);
Session.setDefault('lastMod', null);

Template.calendar.showEditEvent = function() {
	return Session.get('showEditEvent');
}
Template.calendar.rendered = function() {
	$('#calendar').fullcalendar({
		dayClick:function(date, allDay, jsEvent, view) {
			Calendar.insert({title:'New Event', start:date, end:date});
			Session.set('lastMod', new Date());
			
		},
		eventClick:function(calendar, jsEvent, view){
			Session.set('editing_calendar', calendar.id);
			Session.set('showEditEvent', true);
		},
		events:function(start, end, callback){
			var events = [];
			calendar = Calendar.find();
			calendar.forEach(function(evt){
				events.push({
					id:evt._id,
					title:evt.title,
					start:evt.start,
					end:evt.end
			})
		})
			callback(events);
		}
	});
}

Template.calendar.lastMod = function(){
	return Session.get('lastMod');
}