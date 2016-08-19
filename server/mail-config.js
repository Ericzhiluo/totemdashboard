// define mail url here
process.env.MAIL_URL = Meteor.settings.mail.url

// Need to match sender address to SMTP user address to avoid 'relaying disallowed'
Accounts.emailTemplates.from = "Totem Admin <admin@totemtechnology.ca>";

// create custom reset password url here to match route
Accounts.urls.resetPassword = function(token){
  return Meteor.absoluteUrl('passwordReset/'+token);
};
