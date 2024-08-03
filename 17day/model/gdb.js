const mongoose = require('mongoose')
const Schema = mongoose.Schema
const passportlocalMongoose = require('passport-local-Mongoose')
var groominfo = new Schema({
	username: {
		type: String
	},
	password: {
		type: String
	},
	dob: {
		type: Date
	},
	email: {
		type: String
	},
	age: {
		type: Number
	}
})
groominfo.plugin(passportlocalMongoose);
module.exports = mongoose.model('groomtable',groominfo)
