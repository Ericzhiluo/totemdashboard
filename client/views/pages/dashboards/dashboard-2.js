Template.dashboard2.rendered = function(){
    // Set white background color for top navbar
    $('body').addClass('light-navbar');
    $('#voltage').html("Loading...");
    $('#power').html("Loading...");
    $('#current').html("Loading...")
};

Template.dashboard2.destroyed = function(){
    // Remove special class
    $('body').removeClass('light-navbar');
};

import { Machine1 } from '../../../../db/mongo.js';

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
  parse_message = JSON.parse(message.toString());
  $('#voltage').html(parse_message.d.v12.toFixed(7))
  $('#power').html(parse_message.d.apower.toFixed(7))
  $('#current').html(parse_message.d.current.toFixed(7))
}));

// Template.dashboard2.helpers({
//   voltage: function(voltage){
//     if (typeof voltage !== 'undefined'){
//       return voltage
//     } else {
//       return "loading"
//     }
//   },
//   power: function(voltage){
//     if (typeof power !== 'undefined'){
//       return power
//     } else {
//       return "loading"
//     }
//   },
//   current: function(voltage){
//     if (typeof current !== 'undefined'){
//       return current
//     } else {
//       return "loading"
//     }
//   },
// });





