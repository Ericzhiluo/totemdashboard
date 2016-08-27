import { Meteor } from 'meteor/meteor';
import { Machines } from '../../../api/machines/machines.js';
import '../../../api/machines/machines.js';
import '../../components/dataCard.js';
// import '../../components/dataCard.html';
import './dashboard-2.html';


Template.dashboard2.rendered = function(){
    // Set white background color for top navbar
    $('body').addClass('light-navbar');
    $('#voltage').html("Loading...");
    // $('#power').html("Loading...");
    $('#current').html("Loading...")
    $('#status').html("Loading...")
};

Template.dashboard2.destroyed = function(){
    // Remove special class
    $('body').removeClass('light-navbar');
};



Template.dashboard2.events({
  'submit .rules_form'(event) {
    // Prevent default browser form submit
    event.preventDefault();
    console.log('submited');
    // Get value from form element
    const target = event.target;
    const from = target.from.value;
    const to = target.to.value;
    const state = target.state.value;
    // Insert a task into the collection
    Machine1_rules.insert({
      rule: {
        from: from,
        to: to,
        state: state
      },
      createdAt: new Date(), // current time
    });
 
    // Clear form
    target.from.value = '';
    target.to.value = '';
    target.state.value = ''
  },

  'click .rules_delete'(event) {
    Machine1_rules.remove(this._id);
  },
});
Template.dashboard2.helpers({
  Machine1_rules() {
    return Machine1_rules.find({});
  },
});





