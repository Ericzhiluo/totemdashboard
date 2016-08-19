// Check login status before loading any pages, except login, forgotPassword or register
var OnBeforeActions;

OnBeforeActions = {
    loginRequired: function(pause) {
        if (!Meteor.userId()) {
            this.render('login');
            this.layout('blankLayout');
            return pause();
        }   
        this.next();
    }
};

Router.onBeforeAction(OnBeforeActions.loginRequired, {
    except: ['login', 'forgotPassword', 'register', 'passwordReset.:token']
});

// Runs the following in all pages
Router.configure({
	layoutTemplate: 'mainLayout',
	notFoundTemplate: 'notFound'
});

// Routes for pages starts here:
Router.route('/', function () {
	this.render('pageOne');
});

Router.route('/pageOne', function () {
    this.render('dashboard2');
});

Router.route('/pageTwo', function () {
    this.render('pageTwo');
});

// Routes for login system
Router.route('/login', function () {
	this.render('login');
	this.layout('blankLayout');
});

Router.route('/forgotPassword', function () {
    this.render('forgotPassword');
    this.layout('blankLayout');
});

Router.route('/register', function () {
    this.render('register');
    this.layout('blankLayout');
});

Router.route('/passwordReset/:token', function () {
    var params = this.params;
    var token = params.token;
    this.render('passwordReset');
    this.layout('blankLayout');
    Session.set('token', token);
});