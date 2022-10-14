const mongoose = require('mongoose')
const UserSchema = mongoose.Schema({
    google_id:{
        type: String,
        required: true,
        unique: true
    },
    homeCity:{
        type:String,
        default: ''
    },
    destCity:{
        type: String,
        default: ''
    }
})
module.exports = mongoose.model('User',UserSchema)