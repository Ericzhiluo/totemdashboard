import './login.html';

Template.login.events({
	'submit form': function(event){
		event.preventDefault();
		var email = $('[name=email]').val();
    var password = $('[name=password]').val();
    Meteor.loginWithPassword(email, password, function(error){
    	if(error){
    		toastr.error(error.reason, "Log in error");
    	} else {
    		Router.go('pageOne');
            toastr.success('Log in successful!')
    	}
    });
	}
})