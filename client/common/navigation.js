import './navigation.html';

Template.navigation.rendered = function(){

    // Initialize metisMenu
    $('#side-menu').metisMenu();

};

Template.navigation.helpers({
	currentuser: function(){
		return Meteor.user().profile.firstname + " " + Meteor.user().profile.lastname
	}
});