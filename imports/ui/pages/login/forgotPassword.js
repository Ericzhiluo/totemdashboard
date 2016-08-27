import './forgotPassword.html';

Template.forgotPassword.events({
	'submit form': function(event){
		event.preventDefault();
		var options = {};
		options.email = $('[name=email]').val();
		Accounts.forgotPassword(options, function(error){
			if(error){
				toastr.error(error.reason, "Password reset error");
			} else {
			toastr.success("Password reset email has been sent to you.");
			}
		});
	}
});

