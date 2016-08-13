// import { Meteor } from 'meteor/meteor';

// // include npm package in meteor
// // https://www.npmjs.com/package/mqtt
// import mqtt from 'mqtt';

// // initialized a database
// Machine1 = new Mongo.Collection('machine1');

// Meteor.startup(() => {
//   // code to run on server at startup
//     // old way of including npm packages. now changed in newer meteor
//     // var mqtt    = Meteor.npmRequire('mqtt');
//     var client  = mqtt.connect({
//     	// Reads variables from file "development_env.json" located in root
//     	// you have to start meteor and load this file using command "meteor --settings development_env.json"
//       host: Meteor.settings.mqtt.host,
//       port: 1883,
//       username: Meteor.settings.mqtt.username,
//       password: Meteor.settings.mqtt.password,
//       clientId: Meteor.settings.mqtt.clientId
//     });
    
//     client.on('connect', function () {
//       client.subscribe('iot-2/type/RaspberryPi/id/+/evt/+/fmt/+');
//       console.log('connected')
//     });

//     client.on('message', function (topic, message) { 
//       console.log(message.toString());

//       // save into database
//    	  Machine1.insert(message);
//     });
// });
