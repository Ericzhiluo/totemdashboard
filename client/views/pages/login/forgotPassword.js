Template.forgotPassword.events({
	'submit form': function(event){
		event.preventDefault();
		var options = {};
		options.email = $('[name=email]').val();
		Accounts.forgotPassword(options, function(error){
			if(error){
				console.log(error.reason);
			} else {
			console.log("email sent!");
			}
		});
	}
});

