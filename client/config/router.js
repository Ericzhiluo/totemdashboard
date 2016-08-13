Router.configure({
	layoutTemplate: 'mainLayout',
	notFoundTemplate: 'notFound'

});

//
// Example pages routes
//
Router.route('/dashboard2', function () {
    this.render('dashboard2');
});

Router.route('/pageOne', function () {
	this.render('pageOne');
});

Router.route('/pageTwo', function () {
	this.render('pageTwo');
});

// Routes for login system
Router.route('/', function () {
	this.render('login');
	this.layout('blankLayout')
});

Router.route('/login', function () {
	this.render('login');
	this.layout('blankLayout')
});

Router.route('/forgotPassword', function () {
    this.render('forgotPassword');
    this.layout('blankLayout')
});

Router.route('/register', function () {
    this.render('register');
    this.layout('blankLayout')
});

