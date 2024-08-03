const mongoose = require('mongoose')
const Schema = mongoose.Schema
const passportlocalMongoose = require('passport-local-Mongoose')
var Country = new Schema({
	cname: {
		type: String
	},
	cid: {
		type: Number
	},
	cdob: {
		type:String
	},
	caddress: {
		type: String
	},
	password: {
		type: String
	}
})
Country.plugin(passportlocalMongoose);
module.exports = mongoose.model('Politics',Country)
