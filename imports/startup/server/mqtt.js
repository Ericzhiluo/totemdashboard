import mqtt from 'mqtt';
import { Machines } from '../../api/machines/machines.js';

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
  Machines.insert({
    message: JSON.parse(message.toString()).d,
    ts: JSON.parse(message.toString()).ts
  })
  // const parse_message = JSON.parse(message.toString());
  // $('#voltage').html(parse_message.d.v12.toFixed(7));
  // $('#power').html(parse_message.d.apower.toFixed(7));
  // $('#current').html(parse_message.d.current.toFixed(7));
  // const power = parse_message.d.apower
  // Meteor.call('checkstatus', {power: power}, (err, res) => {
  //   if (err) {
  //     console.log(err)
  //   } else {
  //     console.log(res)
  //     $('#status').html(res)
  //   }
  // });
}));