const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({


    tid: Number,
    tage: Number,
    tname:String,
    taddress:String,
    temail: String,
    tphone: String,
    tdob:String,
    created_at: { type: Boolean,default:false},
    is_active:  { type: Boolean, default: false },
    is_verified:  { type: Boolean, default: false },
    is_deleted:  { type: Boolean, default: false },
    last_updated:{ type: Boolean, default: false}   

}, {
    timestamps: true
});
module.exports = mongoose.model('topper', UserSchema);