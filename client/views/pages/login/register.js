Template.register.events({
	'submit form': function(){
		event.preventDefault();
		var firstname = $('[name=firstname').val();
		var lastname = $('[name=lastname').val();
    var email = $('[name=email]').val();
    var password = $('[name=password]').val();
    Accounts.createUser({
      fistname: firstname,
      lastname: lastname,
      email: email,
      password: password
    }, function(error){	
    	if(error){
    		console.log(error.reason);
    	} else {
    		Router.go('pageOne');
    	}
    });
	}
})