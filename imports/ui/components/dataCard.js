import './dataCard.html';
import { Machines } from '../../api/machines/machines.js';



Template.dataCard.onCreated(function() {
	this.subscribe('newData');
})

Template.dataCard.helpers({
	getData: function(){
		const data = Machines.find();
		return data.fetch()[0].message.apower;
	}
})