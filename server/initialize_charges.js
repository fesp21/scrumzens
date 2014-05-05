Meteor.startup(function() {
	Meteor.publish('charges', function() {
		try {
			return Charges.find();
			
		} catch(error) {
			console.log(error);
			}
	});
	
	var chargeRecord = {
		CardType: "Visa",
		CardNumber: "1111 3344 2222 5556",
		ExpirationMonth: "04/2014",
		ExpirationYear: "04/2014",
		Code: "930",
		Zip: 90035,
		Name: "John Jackson"
	};
	
	if (Charges.find().count === 0) {
		Charges.insert(chargeRecord);
	}
});