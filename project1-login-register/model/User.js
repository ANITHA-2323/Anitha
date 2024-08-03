const mongoose = require('mongoose')
const Schema = mongoose.Schema
const passportlocalMongoose = require('passport-local-Mongoose')
var User = new Schema({
	username: {
		type: String
	},
	password: {
		type: String
	}
})
User.plugin(passportlocalMongoose);
module.exports = mongoose.model('User',User)
