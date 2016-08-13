// Accounts.onResetPasswordLink(function(token, done){
// });



Template.passwordReset.events({
	'submit form': function(event){
		event.preventDefault();
		var newPassword = $('[name=newPassword]').val();	
		var token = Session.get('token');
		Accounts.resetPassword(token, newPassword, function(err){
			if(err){
				console.log(err.reason);
			} else {
				Router.go('/');
			}
		});
	}
});	