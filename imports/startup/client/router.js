// Check login status before loading any pages, except login, forgotPassword or register

// import '/imports/ui/layouts/main.js';
// import '/imports/ui/layouts/blank.js';
// import '/imports/ui/common/navigation.js';
// import '/imports/ui/common/footer.js';
// import '/imports/ui/common/ibox-tools.js';
// import '/imports/ui/common/page-heading.js';
// import '/imports/ui/common/top-navbar.js';
import '/imports/ui/pages/login/forgotPassword.js';
import '/imports/ui/pages/login/login.js';
import '/imports/ui/pages/login/passwordReset.js';
import '/imports/ui/pages/login/register.js'
import '../../ui/pages/dashboards/dashboard-2.js';


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
	this.render('dashboard2');
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