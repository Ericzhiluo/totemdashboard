import './passwordReset.html';

Template.passwordReset.events({
	'submit form': function(event){
		event.preventDefault();
		var newPassword = $('[name=newPassword]').val();	
		var token = Session.get('token');
		Accounts.resetPassword(token, newPassword, function(err){
			if(err){
				toastr.error(error.reason, "Password reset error");
			} else {
				Router.go('/');
				toastr.success("Log in successful!", "Password has been reset")
			}
		});
	}
});	