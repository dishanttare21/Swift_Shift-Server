const mongoose = require('mongoose')
const ContractorSchema = mongoose.Schema({
    google_id:{
        type: String,
        required: true,
        unique: true,
    },
    charges:{
        type: JSON,
        default:{per_km:100,per_kg:250,insurance:1000}
    },
    locations:{
        type: Array,
        default: ["Palghar","Boisar","Virar"]
    },
    fullName:{
        type: String,
        min:3,
        max:50,
        required:true
    },
    avgRatings:{
        types: Number,
        min:0,
        max:5,
        default:0
    }
})
module.exports = mongoose.model('Contractor',ContractorSchema)