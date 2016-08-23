Template.dashboard2.rendered = function(){
    // Set white background color for top navbar
    $('body').addClass('light-navbar');
    $('#voltage').html("Loading...");
    $('#power').html("Loading...");
    $('#current').html("Loading...")
    $('#status').html("Loading...")
};

Template.dashboard2.destroyed = function(){
    // Remove special class
    $('body').removeClass('light-navbar');
};
import { Meteor } from 'meteor/meteor';
import { Machine1 } from '../../../../db/mongo.js';
import { Machine1_rules } from '../../../../db/mongo.js';

var client  = mqtt.connect({
  // Reads variables from file "development_env.json" located in root
  // you have to start meteor and load this file using command "meteor --settings development_env.json"
  host: Meteor.settings.public.host,
  port: 1883,
  username: Meteor.settings.public.username,
  password: Meteor.settings.public.password,
  clientId: Meteor.settings.public.clientId
});

client.on('connect', function () {
  client.subscribe('iot-2/type/Accuvim001/id/+/evt/+/fmt/+');
  console.log('connected')
});

client.on('message', Meteor.bindEnvironment(function callback(topic, message) { 
  console.log(message.toString());
  const parse_message = JSON.parse(message.toString());
  $('#voltage').html(parse_message.d.v12.toFixed(7));
  $('#power').html(parse_message.d.apower.toFixed(7));
  $('#current').html(parse_message.d.current.toFixed(7));
  const power = parse_message.d.apower
  Meteor.call('checkstatus', {power: power}, (err, res) => {
    if (err) {
      console.log(err)
    } else {
      console.log(res)
      $('#status').html(res)
    }
  });
}));

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





