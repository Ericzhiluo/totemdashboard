import { Machine1_rules } from '../db/mongo.js'

Meteor.methods({
	'checkstatus'({power}) {
		rules = Machine1_rules.find().fetch()
		for (var i in rules) {
		  if (power >= rules[i].rule.from && power < rules[i].rule.to) {
		  	console.log(rules[i].rule.from)
		  	console.log(power)
		  	return rules[i].rule.state
		  }
		}
		return "Not Defined"
	}
})

	