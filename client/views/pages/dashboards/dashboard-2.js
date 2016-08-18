Template.dashboard2.rendered = function(){
    // Set white background color for top navbar
    $('body').addClass('light-navbar');

};

Template.dashboard2.destroyed = function(){
    // Remove special class
    $('body').removeClass('light-navbar');
};

import { Machine1 } from '../../../../db/mongo.js';

// Machine1.find({}).observeChanges({
//   added: function (id, data) {
//     Template.dashboard2.helpers({
//       voltage: data.message.d.v12,
//       power: data.message.d.apower,
//       current: data.message.d.current
//     });
    
//   }
// });

Template.dashboard2.helpers({
  voltage: function() {
    return Machine1.findOne({}, {sort: {time: -1, limit: 1}}).message.d.v12.toFixed(7);
  },
  power: function() {
    return Machine1.findOne({}, {sort: {time: -1, limit: 1}}).message.d.apower.toFixed(7);
  },
  current: function() {
    return Machine1.findOne({}, {sort: {time: -1, limit: 1}}).message.d.current.toFixed(7);
  }
});
