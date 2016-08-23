// import { Meteor } from 'meteor/meteor';

// // include npm package in meteor
// // https://www.npmjs.com/package/mqtt
import mqtt from 'mqtt';

// initialized a database
import { Machine1 } from '../db/mongo.js';

Meteor.startup(() => {
  // code to run on server at startup
    // old way of including npm packages. now changed in newer meteor
    // var mqtt    = Meteor.npmRequire('mqtt');
    var client  = mqtt.connect({
    	// Reads variables from file "development_env.json" located in root
    	// you have to start meteor and load this file using command "meteor --settings development_env.json"
      host: Meteor.settings.mqtt.host,
      port: 1883,
      username: Meteor.settings.mqtt.username,
      password: Meteor.settings.mqtt.password,
      clientId: Meteor.settings.mqtt.clientId
    });
    
    client.on('connect', function () {
      client.subscribe('iot-2/type/Accuvim001/id/+/evt/+/fmt/+');
      console.log('connected')
    });
    
    client.on('message', Meteor.bindEnvironment(function callback(topic, message) { 
      console.log(message.toString());

      // save into database
   	  Machine1.insert({
        message: JSON.parse(message.toString()),
        time: Date().toLocaleString()
      });
      // Meteor.publish('mqttdata', function() {
      //   return Machine1.findOne({}, {sort: {time: -1, limit: 1}}).message.d
      // })
    }));
});
