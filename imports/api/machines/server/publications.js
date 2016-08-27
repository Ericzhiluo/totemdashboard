// all machines-related publications
import { Machines } from '../machines.js';

Meteor.publish('newData', function(){
	const data = Machines.find({},{sort: {ts: -1}, limit: 1});
	return data;
});
